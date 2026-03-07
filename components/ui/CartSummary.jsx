// ============================================================
// components/ui/CartSummary.jsx
// AnimatePresence عشان الأيتمز تتضاف/تتشال بأنيميشن
// ============================================================

"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function CartSummary({ items, total, onRemove, ctaLabel, onCta, disabled = false, note }) {
  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-10 text-zinc-600"
      >
        <div className="text-4xl mb-3">🛒</div>
        <p className="text-sm">السلة فاضية<br />اختار من المنيو</p>
      </motion.div>
    );
  }

  return (
    <>
      {/* الأيتمز مع AnimatePresence */}
      <div className="space-y-2 mb-5 max-h-64 overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-between bg-zinc-800 rounded-xl px-4 py-3"
            >
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{item.emoji} {item.name}</p>
                <p className="text-zinc-500 text-xs">× {item.qty} = {item.price * item.qty} ج</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.2, color: "#f87171" }}
                whileTap={{ scale: 0.8 }}
                onClick={() => onRemove(item.id)}
                className="cursor-pointer text-zinc-600 text-sm shrink-0 mr-2 transition-colors"
              >
                ✕
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* الإجمالي */}
      <div className="border-t border-zinc-800 pt-4 mb-5">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400 text-sm">الإجمالي</span>
          <motion.span
            key={total}
            initial={{ scale: 1.3, color: "#fb923c" }}
            animate={{ scale: 1, color: "#f97316" }}
            className="text-orange-500 font-black text-xl"
          >
            {total} ج
          </motion.span>
        </div>
      </div>

      {/* زر الـ CTA */}
      <motion.button
        whileHover={!disabled ? { scale: 1.03, boxShadow: "0 0 25px rgba(249,115,22,0.4)" } : {}}
        whileTap={!disabled ? { scale: 0.97 } : {}}
        onClick={onCta}
        disabled={disabled}
        className={`cursor-pointer w-full py-3 sm:py-4 rounded-full font-black text-sm sm:text-base transition-colors duration-200 ${
          disabled
            ? "bg-zinc-700 text-zinc-500 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-400 text-black"
        }`}
      >
        {ctaLabel}
      </motion.button>

      {note && <p className="text-center text-xs text-zinc-600 mt-2">{note}</p>}
    </>
  );
}
