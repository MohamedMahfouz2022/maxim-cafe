// ============================================================
// components/layout/Navbar.jsx
// شريط التنقل — Landing Page واحدة مع hash scroll
// Framer Motion: slide down on mount + stagger links
// ============================================================

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#home",  label: "الرئيسية" },
  { href: "#menu",  label: "المنيو"    },
  { href: "#order", label: "اطلب من مكانك" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 left-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* ---- الشعار ---- */}
        <Link href="#home" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-black text-base sm:text-lg">
              M
            </div>
            <span className="text-xl sm:text-2xl font-black text-white">
              MAXIM <span className="text-orange-500">CAFÉ</span>
            </span>
          </motion.div>
        </Link>

        {/* ---- Desktop Links ---- */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Link
                href={link.href}
                className="cursor-pointer text-sm font-semibold text-zinc-400 hover:text-orange-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ---- CTA + Hamburger ---- */}
        <div className="flex items-center gap-3">
          <Link href="#order" className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 0 20px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-4 py-2 lg:px-5 rounded-full text-sm transition-colors duration-200"
            >
              اطلب الآن ☕
            </motion.button>
          </Link>

          {/* زر الهامبرجر */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="cursor-pointer md:hidden flex flex-col gap-1.5 p-2"
            aria-label="toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-orange-500 origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-orange-500"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-orange-500 origin-center"
            />
          </button>
        </div>
      </div>

      {/* ---- Mobile Dropdown ---- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-zinc-950 border-t border-zinc-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-right w-full py-3 px-4 rounded-xl font-semibold text-sm text-zinc-400 hover:bg-zinc-800 hover:text-orange-400 transition-all duration-200 block"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#order" onClick={() => setMenuOpen(false)} className="block mt-1">
                <button className="cursor-pointer w-full bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-4 rounded-full text-sm transition-colors duration-200">
                  اطلب الآن ☕
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
