// ============================================================
// components/sections/OrderFromTable.jsx
// اطلب من مكانك — بدون منيو هنا
// السلة جاية من CartContext (اتضافت من قسم المنيو)
// الطلب بيتبعت على واتساب على الرقم 01013495432
// ============================================================

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import CartSummary from "../ui/CartSummary";

// رقم الواتساب مع كود الدولة (مصر +20)
const WHATSAPP_NUMBER = "201013495432";

// ============================================================
// دالة بناء رسالة الواتساب (Build WhatsApp Message)
// ============================================================
function buildWhatsAppMessage(tableNumber, items, total) {
  const header = `🧾 *طلب جديد من كافيه ماكسيم*\n\n📍 *طاولة رقم:* ${tableNumber}\n\n`;

  const itemLines = items
    .map((item) => `${item.emoji} *${item.name}* × ${item.qty} = ${item.price * item.qty} ج`)
    .join("\n");

  const footer = `\n\n──────────────\n💰 *الإجمالي: ${total} ج*`;

  // encodeURIComponent عشان الرسالة تتبعت صح في الـ URL
  return encodeURIComponent(header + itemLines + footer);
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function OrderFromTable() {
  const [tableNumber, setTableNumber] = useState("");
  const [orderSent, setOrderSent] = useState(false);

  // السلة الموجودة من قسم المنيو
  const { items, removeItem, clearCart, total } = useCart();

  // ---- إرسال الطلب على واتساب ----
  const handleSendToWhatsApp = () => {
    if (!tableNumber || items.length === 0) return;

    const message = buildWhatsAppMessage(tableNumber, items, total);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // فتح واتساب في تاب جديد
    window.open(whatsappUrl, "_blank");

    // إظهار رسالة النجاح
    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
      clearCart();
      setTableNumber("");
    }, 5000);
  };

  const canSend = tableNumber && items.length > 0;

  return (
    <section id="order" className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-900/30">
      <div className="max-w-3xl mx-auto">

        {/* ---- رأس القسم ---- */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-orange-500 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Order From Table
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-3">
            اطلب من <span className="text-orange-500">مكانك</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            اختار من المنيو فوق، ارجع هنا، وابعت الطلب على واتساب 🚀
          </p>
        </motion.div>

        {/* ---- إشعار نجاح الإرسال ---- */}
        <AnimatePresence>
          {orderSent && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="mb-8 bg-green-500/10 border border-green-500/30 rounded-2xl p-5 sm:p-6 text-center"
            >
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-xl font-black text-green-400">طلبك اتبعت على واتساب!</h3>
              <p className="text-zinc-400 mt-1 text-sm sm:text-base">
                طاولة رقم{" "}
                <span className="text-orange-400 font-bold">{tableNumber}</span> — الكاشير شايف طلبك دلوقتي
              </p>
              <p className="text-zinc-600 text-xs mt-2">هيتم تفريغ السلة تلقائياً بعد شوية</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---- الكارد الرئيسي ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8"
        >
          {/* حقل رقم الطاولة */}
          <div className="mb-8">
            <h3 className="font-black text-lg sm:text-xl mb-4 text-orange-400 flex items-center gap-2">
              <span>📍</span> أنت على أنهي طاولة؟
            </h3>
            <motion.input
              whileFocus={{ borderColor: "#f97316", scale: 1.01 }}
              type="number"
              min={1}
              placeholder="ادخل رقم الطاولة (مثلاً: 5)"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="w-full bg-zinc-800 border-2 border-zinc-700 focus:border-orange-500 rounded-2xl px-5 py-4 text-white text-xl sm:text-2xl text-center placeholder-zinc-600 outline-none transition-colors font-black no-spinner"
            />
          </div>

          {/* ملخص السلة */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-black">🧾 طلبك</h3>
              {tableNumber && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-sm font-bold"
                >
                  طاولة {tableNumber}
                </motion.span>
              )}
            </div>

            <CartSummary
              items={items}
              total={total}
              onRemove={removeItem}
              ctaLabel={
                canSend
                  ? "📲 ابعت على واتساب"
                  : items.length === 0
                    ? "اختار أصناف من المنيو الأول ↑"
                    : "ادخل رقم الطاولة الأول"
              }
              onCta={handleSendToWhatsApp}
              disabled={!canSend}
              note={
                !tableNumber && items.length > 0
                  ? "لازم تكتب رقم طاولتك عشان تبعت الطلب"
                  : null
              }
            />
          </div>

          {/* تلميح للعميل لو السلة فاضية */}
          {items.length === 0 && !orderSent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-pointer text-orange-400 hover:text-orange-300 text-sm font-bold underline underline-offset-4 transition-colors"
              >
                ↑ روح اختار من المنيو
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* واتساب badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2 text-zinc-600 text-xs"
        >
          <span>🟢</span>
          <span>الطلبات بتتبعت مباشرة للكاشير عبر واتساب</span>
        </motion.div>
      </div>
    </section>
  );
}
