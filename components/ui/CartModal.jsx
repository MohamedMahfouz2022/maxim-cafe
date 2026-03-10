"use client";

import { motion, AnimatePresence } from "framer-motion";
import CartSummary from "./CartSummary";

export default function CartModal({ isOpen, onClose, items, total, onRemove }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <h2 className="text-xl font-black text-white">قائمة طلباتك 🛒</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <CartSummary
              items={items}
              total={total}
              onRemove={onRemove}
              ctaLabel="أكمل الطلب الآن ✅"
              onCta={() => {
                onClose();
                window.location.hash = "order";
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
