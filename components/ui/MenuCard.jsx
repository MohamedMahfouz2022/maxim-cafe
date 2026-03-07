"use client";

import { motion } from "framer-motion";

export default function MenuCard({ item, onAdd }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover="cardHovered"
      variants={{
        cardHovered: {
          y: -6,
          boxShadow: "0 20px 40px rgba(249,115,22,0.12)",
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-4 sm:p-5 flex flex-col"
    >
      {/* الإيموجي — يتحرك لما الكارت يتهوفر */}
      <motion.div
        variants={{
          cardHovered: {
            scale: 1.2,
            rotate: [0, -8, 8, -4, 4, 0],
            transition: { duration: 0.5 },
          },
        }}
        className="text-4xl sm:text-5xl mb-3 text-center"
      >
        {item.emoji}
      </motion.div>

      {/* المعلومات */}
      <div className="flex-1 mb-3">
        <h3 className="font-black text-base sm:text-lg text-white">{item.name}</h3>
        <p className="text-zinc-500 text-xs">{item.nameEn}</p>
        <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed">{item.desc}</p>
      </div>

      {/* السعر + زر الإضافة */}
      <div className="flex items-center justify-between">
        <span className="text-orange-500 font-black text-lg sm:text-xl">{item.price} ج</span>
        <motion.button
          whileHover={{ scale: 1.15, backgroundColor: "#fb923c" }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.stopPropagation(); onAdd(item); }}
          className="cursor-pointer bg-orange-500 text-black font-bold w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xl leading-none"
        >
          +
        </motion.button>
      </div>
    </motion.div>
  );
}