import React from "react";
import { Eye, Heart, Target } from "@phosphor-icons/react";
import { Container } from "../ui/Base";

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Segurança",
    description:
      "Proteção de dados, validação rigorosa e prevenção ativa para reduzir riscos em cada viagem.",
  },
  {
    number: "02",
    title: "Confiabilidade",
    description:
      "Processos claros e respostas rápidas para manter sua operação sempre segura e previsível.",
  },
  {
    number: "03",
    title: "Inovação",
    description:
      "Automação inteligente e análises em tempo real para decisões mais ágeis e assertivas.",
  },
  {
    number: "04",
    title: "Integrações",
    description:
      "Conectamos TMS, ERPs e bases de dados para uma gestão unificada e sem retrabalho.",
  },
];

const VALUES = [
  "Integridade",
  "Precisão",
  "Inovação",
  "Responsabilidade",
  "Colaboração",
];

const MVV_CARDS = [
  {
    number: "01",
    title: "Missão",
    icon: <Target className="w-6 h-6 text-white" />,
    description:
      "Transformar a logística através da tecnologia, garantindo segurança e agilidade para transportadoras e motoristas em todo o Brasil.",
  },
  {
    number: "02",
    title: "Visão",
    icon: <Eye className="w-6 h-6 text-white" />,
    description:
      "Ser a referência nacional em inteligência logística e prevenção de fraudes, conectando o setor com soluções digitais inovadoras.",
  },
  {
    number: "03",
    title: "Valores",
    icon: <Heart className="w-6 h-6 text-white" />,
  },
];

export const WhoWeAre: React.FC = () => {
  return (
    <section
      id="quem-somos"
      className="relative bg-black py-20 sm:py-24 lg:py-28 overflow-hidden"
    >

      <Container className="relative z-10 space-y-16 sm:space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Quem Somos
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Mais do que uma plataforma, somos parceiros estratégicos para o
              sucesso da sua operação logística.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              A <span className="text-brand-primary font-semibold">OnRota</span>{" "}
              nasceu para revolucionar a gestão de risco no transporte.
              Combinamos inteligência de dados, automação e um profundo
              conhecimento do setor para entregar soluções que protegem sua
              carga e aceleram seus processos.
            </p>

            <div className="space-y-7">
              {JOURNEY_STEPS.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <span className="text-base font-semibold text-brand-primary">
                    {step.number}.
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-brand-primary">
                      {step.title}
                    </h4>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative py-4 sm:py-6">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {MVV_CARDS.map((card) => (
              <div
                key={card.title}
                className="group relative flex flex-col h-full bg-[#080808] border border-white/5 hover:border-white/20 transition duration-700 ease-out p-6 sm:p-7 rounded-2xl overflow-hidden transform-gpu hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex justify-between items-start mb-7 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/5 text-white flex items-center justify-center group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                    {card.icon}
                  </div>
                  <span className="font-mono text-3xl text-white/10 group-hover:text-white/25 transition-colors duration-500 font-light select-none">
                    {card.number}
                  </span>
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="text-sm sm:text-base tracking-[0.32em] text-white/85 uppercase mb-4">
                    {card.title}
                  </h3>
                  {card.description ? (
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  ) : (
                    <ul className="space-y-2 text-sm sm:text-base text-slate-300">
                      {VALUES.map((value) => (
                        <li key={value} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/0 via-white/40 to-white/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
