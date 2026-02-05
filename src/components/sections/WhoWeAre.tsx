import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Heart,
  Lightning,
  Shield,
  Target,
  TrendUp,
} from "@phosphor-icons/react";
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

const PILLARS = [
  {
    icon: <Shield className="w-9 h-9 text-brand-primary" />,
    title: "Segurança",
    description:
      "Proteção de dados e validação rigorosa para minimizar riscos em cada operação.",
  },
  {
    icon: <Lightning className="w-9 h-9 text-yellow-400" />,
    title: "Inovação",
    description:
      "Tecnologia de ponta e atualização constante para estar à frente do mercado.",
  },
  {
    icon: <TrendUp className="w-9 h-9 text-green-400" />,
    title: "Eficiência",
    description:
      "Processos ágeis que economizam tempo e recursos da sua transportadora.",
  },
];

const VALUES = [
  "Integridade",
  "Precisão",
  "Inovação",
  "Responsabilidade",
  "Colaboração",
];

const CTA_FEATURES = [
  "Cadastro inteligente e validação em segundos",
  "Monitoramento contínuo contra fraudes",
  "Integrações com TMS e ERPs líderes do mercado",
];

export const WhoWeAre: React.FC = () => {
  return (
    <section
      id="quem-somos"
      className="relative bg-black py-20 sm:py-28 overflow-hidden"
    >

      <Container className="relative z-10 space-y-20 sm:space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div className="space-y-7">
            <p className="text-base text-brand-primary">[Como funciona]</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Nossa jornada rumo à excelência tecnológica
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Na OnRota, somos especializados em soluções de inteligência
              logística que reduzem riscos, automatizam cadastros e dão
              visibilidade total para transportadoras e GRs.
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

        <div className="space-y-12">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Quem Somos
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Mais do que uma plataforma, somos parceiros estratégicos para o
              sucesso da sua operação logística.
            </p>
            <div className="h-0.5 w-16 bg-brand-primary mx-auto" />
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              A <span className="text-brand-primary font-semibold">OnRota</span>{" "}
              nasceu para revolucionar a gestão de risco no transporte.
              Combinamos inteligência de dados, automação e um profundo
              conhecimento do setor para entregar soluções que protegem sua
              carga e aceleram seus processos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-base text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-primary/15 to-transparent p-8 sm:p-10 rounded-3xl border border-brand-primary/20">
              <div className="flex items-center gap-4 mb-5">
                <Target className="w-9 h-9 text-brand-primary" />
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Missão
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Transformar a logística através da tecnologia, garantindo
                segurança e agilidade para transportadoras e motoristas em todo
                o Brasil.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-accent/15 to-transparent p-8 sm:p-10 rounded-3xl border border-brand-accent/20">
              <div className="flex items-center gap-4 mb-5">
                <Eye className="w-9 h-9 text-brand-accent" />
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Visão
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Ser a referência nacional em inteligência logística e prevenção
                de fraudes, conectando o setor com soluções digitais inovadoras.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Nossos Valores
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {VALUES.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm sm:text-base font-medium text-gray-200"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
