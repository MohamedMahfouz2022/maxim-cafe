"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          boxShadow: "0 20px 40px rgba(249,115,22,0.15)",
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 rounded-2xl overflow-hidden flex flex-col group"
    >
      {/* ---- صورة الصنف ---- */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-orange-500/10">
        <motion.div
          variants={{
            cardHovered: {
              scale: 1.08,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmS9wAAAABJRU5ErkJggg=="
          />
        </motion.div>

        {/* طبقة تدرج خافتة */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/10 to-transparent" />

        {/* السعر فوق الصورة */}
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-black font-black text-sm px-3 py-1 rounded-full shadow-lg">
            {item.price} ج
          </span>
        </div>
      </div>

      {/* ---- المعلومات ---- */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex-1 mb-3">
          <h3 className="font-black text-base sm:text-lg text-white leading-snug">{item.name}</h3>
          <p className="text-zinc-500 text-xs mb-1">{item.nameEn}</p>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
        </div>

        {/* زر الإضافة */}
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(249,115,22,0.4)" }}
          whileTap={{ scale: 0.96 }}
          onClick={(e) => { e.stopPropagation(); onAdd(item); }}
          className="cursor-pointer w-full bg-orange-500 hover:bg-orange-400 text-black font-bold py-2.5 rounded-xl text-sm transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>+ أضف للطلب</span>
        </motion.button>
      </div>
    </motion.div>
  );
}