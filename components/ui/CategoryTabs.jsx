// ============================================================
// components/ui/CategoryTabs.jsx
// ============================================================

"use client";

import { motion } from "framer-motion";

export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(cat)}
          className={`cursor-pointer relative px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-colors duration-200 ${
            active === cat ? "text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          {/* خلفية متحركة للـ active tab */}
          {active === cat && (
            <motion.span
              layoutId="activeCatBg"
              className="absolute inset-0 bg-orange-500 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </motion.button>
      ))}
    </div>
  );
}
