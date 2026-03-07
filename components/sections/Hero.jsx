// ============================================================
// components/sections/Hero.jsx
// Hero Section — بدون كوب، تصميم مركزي كامل
// ============================================================

"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const STATS = [
  { num: "٥٠+", label: "صنف في المنيو" },
  { num: "٢٠٠+", label: "عميل يومياً" },
  { num: "٥★", label: "تقييم العملاء" },
];

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* ---- خلفية ---- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-orange-600/8 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #f97316 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      {/* ---- المحتوى المركزي ---- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* شارة "مفتوح الآن" */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-4 sm:px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-orange-400 text-xs sm:text-sm font-semibold">
            مفتوح الآن · Open Now
          </span>
        </motion.div>

        {/* العنوان */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="text-white">كافيه </span>
          <span className="text-transparent" style={{ WebkitTextStroke: "2px #f97316" }}>
            MAXIM
          </span>
          <br />
          <span className="text-orange-500">تجربة</span>
          <span className="text-white"> لا تُنسى</span>
        </motion.h1>

        {/* الوصف */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          قهوة استثنائية، أجواء دافئة، وخدمة تحكي.
          اطلب من مكانك واستمتع بكل لحظة.
        </motion.p>

        {/* أزرار CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249,115,22,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate("menu")}
            className="cursor-pointer bg-orange-500 hover:bg-orange-400 text-black font-bold px-10 py-4 rounded-full text-base sm:text-lg transition-colors duration-300"
          >
            🍽️ شوف المنيو
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate("order")}
            className="cursor-pointer bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold px-10 py-4 rounded-full text-base sm:text-lg transition-all duration-300"
          >
            📱 اطلب دلوقتي
          </motion.button>
        </motion.div>

        {/* إحصائيات */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {STATS.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-orange-500">{num}</div>
              <div className="text-zinc-500 text-sm mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* سهم التمرير */}
      {/* <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-8 border-2 border-orange-500/50 rounded-full flex items-center justify-center">
          <span className="text-orange-500 text-xs">↓</span>
        </div>
      </motion.div> */}
    </section>
  );
}