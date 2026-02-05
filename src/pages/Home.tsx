import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { WhoWeAre } from "../components/sections/WhoWeAre";
import { Solutions } from "../components/sections/Solutions";
import { Consulting } from "../components/sections/Consulting";
import { Benefits } from "../components/sections/Benefits";
import { Testimonials } from "../components/sections/Testimonials";
import { Leadership } from "../components/sections/Leadership";
import { Headquarters } from "../components/sections/Headquarters";
import { Contact } from "../components/sections/Contact";
import { WhatsappLogo } from "@phosphor-icons/react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-brand-primary/30 selection:text-white overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <WhoWeAre />
        <Solutions />
        <Consulting />
        <Benefits />
        <Testimonials />
        <Leadership />
        <Headquarters />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button (Mobile) */}
      <a
        href="https://wa.me/5544999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <WhatsappLogo className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default Home;
