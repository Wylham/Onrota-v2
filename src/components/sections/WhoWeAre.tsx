import React from "react";
import { Button, Container } from "../ui/Base";

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
  {
    title: "Integridade",
    description: "Atuamos com transparência em cada interação.",
  },
  {
    title: "Precisão",
    description: "Perseguimos exatidão nos dados e processos.",
  },
  {
    title: "Inovação Contínua",
    description: "Simplificamos o complexo constantemente.",
  },
  {
    title: "Responsabilidade",
    description: "Compromisso com clientes, parceiros e motoristas.",
  },
  {
    title: "Colaboração",
    description: "Fortalecemos toda a cadeia logística.",
  },
];

const MVV_ITEMS = [
  {
    number: "01",
    tag: "Missão",
    title: "Promover confiança no transporte brasileiro",
    highlight: "antecipando riscos e evitando fraudes",
    description:
      "Tecnologia que dá visibilidade de ponta a ponta, transforma dados em decisões seguras, automatiza verificações críticas e reduz o impacto de erros humanos nas operações diárias.",
    side: "right",
  },
  {
    number: "02",
    tag: "Visão",
    title: "Ser referência em antifraude e automação no transporte rodoviário",
    highlight: "definindo o novo padrão de segurança e simplicidade",
    description:
      "Enxergamos um ecossistema em que cada etapa da contratação à entrega é validada, rastreada e mensurada.",
    side: "left",
  },
  {
    number: "03",
    tag: "Valores",
    title: "Nossos valores guiam cada decisão",
    highlight: "todos os dias",
    description:
      "Princípios que mantêm pessoas, segurança e transparência no centro das escolhas.",
    values: VALUES,
    side: "right",
  },
];

const BLOG_TEASER = {
  tag: "Blog • Em breve",
  title: "Conteúdos exclusivos sobre gestão de risco e logística",
  description:
    "Estamos preparando artigos, cases e entrevistas com especialistas para compartilhar aprendizados reais do dia a dia na estrada.",
  topics: ["Boas práticas", "Tecnologia", "Mercado", "OnRota Inside"],
  nextUp:
    "Hub de conteúdo com biblioteca de artigos, cases e newsletter. Avise sua equipe: o primeiro post chegará em breve!",
};

const BACKGROUND_LAYERS =
  // base horizontal gradient: azul bem discreto nas bordas para preto sólido no centro
  "linear-gradient(90deg, #050912 0%, #040814 18%, #02040c 40%, #010207 64%, #000105 100%)";

export const WhoWeAreIntro: React.FC<{ withId?: boolean }> = ({
  withId = true,
}) => {
  return (
    <section
      id={withId ? "quem-somos" : undefined}
      className="relative bg-black pt-24 sm:pt-28 pb-20 sm:pb-24 lg:pb-28 overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-8 sm:space-y-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Quem Somos
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Mais do que uma plataforma, somos parceiros estratégicos para o
              sucesso da sua operação logística.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              A <span className="text-brand-primary font-semibold">OnRota</span>{" "}
              nasceu para revolucionar a gestão de risco no transporte.
              Combinamos inteligência de dados, automação e um profundo
              conhecimento do setor para entregar soluções que protegem sua
              carga e aceleram seus processos.
            </p>

            <div className="space-y-9 sm:space-y-10">
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-b from-transparent via-black/35 to-black/85" />
    </section>
  );
};

export const MVVSection: React.FC = () => {
  return (
    <section
      className="relative isolate overflow-hidden pb-20 sm:pb-24 lg:pb-28"
      style={{
        backgroundColor: "#01030a",
        backgroundImage: BACKGROUND_LAYERS,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* fade de transição a partir da seção anterior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-black via-black/70 to-transparent" />
      {/* vinheta leve para leitura */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/12 via-black/26 to-black/42" />

      <div className="relative z-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="space-y-12 sm:space-y-14 lg:space-y-16 py-8 sm:py-12 lg:py-16">
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
                  <h4
                    className={`text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-tight ${
                      item.side === "left" ? "lg:pr-6" : "lg:pl-6"
                    }`}
                  >
                    {item.title}{" "}
                    <span className="text-brand-primary">{item.highlight}</span>
                  </h4>

                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  {item.values ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-100">
                      {item.values.map((value) => (
                        <li
                          key={value.title}
                          className="flex flex-col gap-1 border border-white/5 rounded-lg p-3 bg-white/5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/80" />
                            <span className="font-semibold text-white">
                              {value.title}
                            </span>
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {value.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Container>
          ))}

          <Container className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 p-8 sm:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-primary/80">
                  {BLOG_TEASER.tag}
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
                  {BLOG_TEASER.title}
                </h3>
                <p className="text-base text-gray-200 leading-relaxed">
                  {BLOG_TEASER.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {BLOG_TEASER.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-100 border border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-black/35 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                <div className="text-sm uppercase tracking-[0.18em] text-brand-primary/70">
                  Em breve
                </div>
                <div className="text-lg font-semibold text-white">
                  Primeira postagem do blog
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {BLOG_TEASER.nextUp}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="self-start"
                >
                  Ver blog (em breve)
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export const WhoWeAre: React.FC = () => {
  return <WhoWeAreIntro />;
};
