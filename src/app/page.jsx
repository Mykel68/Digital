import Image from "next/image";
import Navbar from "@/layouts/Navbar.tsx";
// import NavbarDemo from "@/layouts/NavbarDemo";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Footer from "@/layouts/Footer";
import Testimonials from "@/layouts/Testimonials";

import Girl from "@/assets/girl.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <Navbar className="top-3 " />
      <div className=" container  flex flex-col gap-4 ">
        {/* <NavbarDemo /> */}
        <Hero
          title="Institute of Digital Humanities"
          description="Responsive Shadcn starter template with Next.js 14, App Router, Dark Mode, React Icons, Navbar and Footer, and all Shadcn components. And a fun blob."
          image={Girl}
        />

        <About />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
