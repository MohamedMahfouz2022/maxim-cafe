// ============================================================
// components/layout/Footer.jsx
// بدون "حجز طاولة"
// ============================================================

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "الرئيسية",       href: "/"  },
  { label: "المنيو",          href: "/menu"  },
  { label: "اطلب من مكانك",  href: "/order" },
];

const CONTACT_INFO = [
  { icon: "📍", text: "القاهرة، مصر"       },
  { icon: "📞", text: "01000000000"         },
  { icon: "⏰", text: "٩ ص - ١٢ م"         },
  { icon: "📧", text: "info@maximcafe.com"  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">

          {/* ---- الشعار ---- */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-black text-lg">
                M
              </div>
              <span className="text-xl font-black">MAXIM CAFÉ</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              مكانك المفضل للقهوة والراحة. نقدم أجود أنواع القهوة في أجواء دافئة ومريحة.
            </p>
          </div>

          {/* ---- روابط سريعة ---- */}
          <div>
            <h4 className="font-black text-orange-500 mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="inline-block">
                    <motion.div
                      whileHover={{ x: -4, color: "#f97316" }}
                      className="cursor-pointer transition-colors duration-200 inline-block"
                    >
                      {label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- تواصل ---- */}
          <div>
            <h4 className="font-black text-orange-500 mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              {CONTACT_INFO.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  {icon} {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 text-center text-zinc-600 text-sm">
          © 2025 Maxim Café — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
