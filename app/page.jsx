// ============================================================
// app/page.jsx
// بدون Reservation Section
// ============================================================

"use client";

import { useState } from "react";
// import Navbar         from "@/components/layout/Navbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Menu from "../components/sections/Menu";
import OrderFromTable from "../components/sections/OrderFromTable";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Menu onNavigateToOrder={() => handleNavigate("order")} />
        <OrderFromTable />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
