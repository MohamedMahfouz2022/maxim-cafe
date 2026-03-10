// ============================================================
// app/layout.jsx
// Root Layout — metadata + CartProvider
// ============================================================

import { CartProvider } from "../context/CartContext";
import "./globals.css";

export const metadata = {
  title: "Maxim Café | كافيه ماكسيم",
  description:
    "قهوة استثنائية، أجواء دافئة، وخدمة تحكي. اطلب من مكانك واستمتع بكل لحظة في كافيه ماكسيم.",
  keywords: ["كافيه", "قهوة", "maxim cafe", "مطعم", "كافيه مصر"],
  authors: [{ name: "Maxim Café" }],
  openGraph: {
    title: "Maxim Café | كافيه ماكسيم",
    description: "قهوة استثنائية، أجواء دافئة، وخدمة تحكي.",
    type: "website",
    locale: "ar_EG",
    siteName: "Maxim Café",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxim Café | كافيه ماكسيم",
    description: "قهوة استثنائية، أجواء دافئة، وخدمة تحكي.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
