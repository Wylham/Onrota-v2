import React from "react";
import { Container } from "../ui/Base";
import { SolutionOnRisk } from "./solutions/SolutionOnRisk";
import { SolutionOnCad } from "./solutions/SolutionOnCad";
import { SolutionOnTrack } from "./solutions/SolutionOnTrack";
import { SolutionOnID } from "./solutions/SolutionOnID";
import { SolutionOnDeep } from "./solutions/SolutionOnDeep";

export const Solutions: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 sm:py-24 lg:py-28 bg-dark">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Um ecossistema completo de soluções para sua operação.
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              Do cadastro inteligente à validação profunda, conectamos
              tecnologia e segurança para reduzir riscos e acelerar o
              transporte.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Focando no seu negócio",
              desc: "Começamos entendendo profundamente os objetivos da sua operação.",
              image: "/img/esferal.png",
              alt: "Render 3D de esfera azul",
              shift: "lg:translate-y-6",
            },
            {
              title: "Soluções personalizadas",
              desc: "Nossa equipe desenha fluxos e integrações sob medida para o seu risco.",
              image: "/img/star.png",
              alt: "Render 3D de estrela azul",
              shift: "lg:-translate-y-2",
            },
            {
              title: "Escalabilidade e inovação",
              desc: "Tecnologia de ponta para crescer com segurança e performance.",
              image: "/img/rubi.png",
              alt: "Render 3D de rubi azul",
              shift: "lg:translate-y-10",
            },
          ].map((card) => {
            return (
              <div
                key={card.title}
                className={`rounded-3xl bg-[#0b0b0b] border border-white/10 p-8 text-center ${card.shift}`}
              >
                <div className="mx-auto mb-8 h-64 w-64 sm:h-72 sm:w-72 lg:h-70 lg:w-70 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-contain scale-[1.45] sm:scale-[1.55] lg:scale-[1.65] drop-shadow-[0_28px_60px_rgba(0,0,0,0.75)]"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20 space-y-16 sm:space-y-24 lg:space-y-32">
          <SolutionOnRisk />
          <div className="w-full h-px bg-white/10" />
          <SolutionOnCad />
          <div className="w-full h-px bg-white/10" />
          <SolutionOnTrack />
          <div className="w-full h-px bg-white/10" />
          <SolutionOnID />
          <div className="w-full h-px bg-white/10" />
          <SolutionOnDeep />
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Pronto para transformar sua operação?
          </h3>
          <button
            onClick={() => (window.location.href = "#contato")}
            className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(29,167,229,0.25)] transition-all transform hover:scale-105"
          >
            Falar com um especialista agora
          </button>
        </div>
      </Container>
    </section>
  );
};
