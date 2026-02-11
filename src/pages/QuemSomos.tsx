import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhoWeAreIntro, MVVSection } from "../components/sections/WhoWeAre";

const QuemSomos: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-brand-primary/30 selection:text-white overflow-x-hidden">
      <Header />

      <main className="pt-24 sm:pt-28">
        <WhoWeAreIntro />
        <MVVSection />
      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;
