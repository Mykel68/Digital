"use client";
import { useEffect, useState } from "react";

import Navbar from "@/layouts/Navbar.tsx";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Footer from "@/layouts/Footer";
import Testimonials from "@/layouts/Testimonials";
import FAQ from "@/layouts/FAQ";
import CallToAction from "@/layouts/call_to_action";
import Gallery from "@/layouts/Gallery";

import Girl from "@/assets/girl.png";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col ">
      <div
        className={`fixed inset-0 blur-md transition-all duration-300 ${
          scrollPosition > 100 ? "backdrop-blur-lg" : ""
        }`}
        style={{ zIndex: -1 }}
      ></div>
      <Navbar className="top-3" />
      <div className="container flex flex-col gap-4">
        <Hero
          title="Institute of Digital Humanities"
          description="Responsive Shadcn starter template with Next.js 14, App Router, Dark Mode, React Icons, Navbar and Footer, and all Shadcn components. And a fun blob."
          image={Girl}
        />

        <About />
        <Testimonials />
        <FAQ />
        <Gallery />
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
}
