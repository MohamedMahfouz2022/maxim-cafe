// ============================================================
// components/sections/Menu.jsx
// المنيو — الأصناف هنا بس، مش في Order Section
// ============================================================

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menuData, menuCategories } from "../../data/menuData";
import { useCart } from "../../context/CartContext";
import MenuCard from "../ui/MenuCard";
import CategoryTabs from "../ui/CategoryTabs";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const { items: cart, addItem, removeItem, total } = useCart();

  return (
    <section id="menu" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* ---- رأس القسم ---- */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-10 sm:mb-16"
      >
        <span className="text-orange-500 text-xs sm:text-sm font-bold uppercase tracking-widest">
          Our Menu
        </span>
        <h2 className="text-4xl sm:text-5xl font-black mt-2 mb-3">
          منيو <span className="text-orange-500">ماكسيم</span>
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">أصناف مختارة بعناية لتلبي كل ذوق</p>
      </motion.div>

      {/* ---- تبويبات الأصناف ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-8 sm:mb-12"
      >
        <CategoryTabs categories={menuCategories} active={activeCategory} onChange={setActiveCategory} />
      </motion.div>

      {/* ---- الكروت ---- */}
      <motion.div
        key={activeCategory} // إعادة أنيميشن لما تتغير الكاتيجوري
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        {menuData[activeCategory].map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <MenuCard item={item} onAdd={addItem} />
          </motion.div>
        ))}
      </motion.div>

      {/* ---- معاينة السلة ---- */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-12 bg-zinc-900 border border-orange-500/30 rounded-3xl p-5 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-black mb-5 text-orange-500">🛒 اختياراتك</h3>

          <div className="space-y-3 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-zinc-800 rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span>{item.emoji}</span>
                  <span className="font-semibold text-sm sm:text-base truncate">{item.name}</span>
                  <span className="text-zinc-500 text-xs sm:text-sm shrink-0">× {item.qty}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="text-orange-400 font-bold text-sm">{item.price * item.qty} ج</span>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onClick={() => removeItem(item.id)}
                    className="cursor-pointer text-zinc-500 hover:text-red-400 transition-colors"
                  >
                    ✕
                  </motion.button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-700 pt-4">
            <span className="text-lg sm:text-xl font-black">
              الإجمالي: <span className="text-orange-500">{total} ج</span>
            </span>
            <Link href="/order" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer w-full bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-3 rounded-full transition-colors duration-200"
              >
                ابعت الطلب على واتساب ←
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  );
}
