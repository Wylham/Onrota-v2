import React from "react";
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

const MVV_ITEMS = [
  {
    number: "01",
    tag: "Missão",
    title: "Transformando a gestão de risco com",
    highlight: "soluções inteligentes",
    description:
      "Garantir que cada viagem seja segura, ágil e confiável, combinando tecnologia, dados e proximidade com quem opera a logística todos os dias.",
    side: "right",
  },
  {
    number: "02",
    tag: "Visão",
    title: "Ser a referência nacional em",
    highlight: "inteligência logística",
    description:
      "Unificar transportadoras, embarcadores e motoristas em uma jornada digital que reduz fraudes, acelera decisões e mantém as operações sempre em movimento.",
    side: "left",
  },
  {
    number: "03",
    tag: "Valores",
    title: "Vivemos princípios que sustentam cada entrega",
    highlight: "todos os dias",
    description:
      "Nossa cultura coloca pessoas, segurança e transparência no centro das escolhas.",
    values: VALUES,
    side: "right",
  },
];

const BACKGROUND_LAYERS =
  "linear-gradient(180deg, #02040a 0%, #01030a 55%, #02040a 100%)," +
  "radial-gradient(circle at 18% 26%, rgba(29,167,229,0.22), transparent 44%)," +
  "radial-gradient(circle at 82% 38%, rgba(29,167,229,0.18), transparent 50%)," +
  "repeating-linear-gradient(-11deg, rgba(90,170,255,0.78) 0 1px, transparent 1px 70px)";

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
      </Container>

      <div className="relative z-0 mt-16 sm:mt-20">
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-[#02040a]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: BACKGROUND_LAYERS,
              backgroundSize: "240% 220%",
              backgroundPosition: "50% 35%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

          <div className="relative space-y-12 sm:space-y-14 lg:space-y-16 py-4 sm:py-6">
            {MVV_ITEMS.map((item) => (
              <Container key={item.tag} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px] py-10 sm:py-12 lg:py-14">
                  <div
                    className={`relative hidden lg:flex items-start ${
                      item.side === "left" ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  >
                    <span
                      className={`absolute top-10 ${
                        item.side === "right" ? "left-12" : "right-12"
                      } text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div
                    className={`copy relative flex flex-col justify-center space-y-5 ${
                      item.side === "left" ? "lg:col-start-1" : "lg:col-start-2"
                    }`}
                  >
                    <h4 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-tight">
                      {item.title} <span className="text-brand-primary">{item.highlight}</span>
                    </h4>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>

                    {item.values ? (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-100">
                        {item.values.map((value) => (
                          <li key={value} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/70" />
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Container>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
