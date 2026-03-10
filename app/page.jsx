// ============================================================
// app/page.jsx  — Single Landing Page
// ============================================================

"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Menu from "../components/sections/Menu";
import OrderFromTable from "../components/sections/OrderFromTable";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <OrderFromTable />
      </main>
      <Footer />
    </div>
  );
}
