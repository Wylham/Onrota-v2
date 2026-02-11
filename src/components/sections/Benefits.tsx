import React from 'react';
import { Container, SectionHeader, Card } from '../ui/Base';
import { TrendDown, Clock, PiggyBank, ShieldCheck } from '@phosphor-icons/react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <TrendDown className="w-6 h-6 text-green-400" />,
      value: "96%",
      label: "Redução de Fraudes",
      desc: "Minimizamos drasticamente o risco de roubo de carga."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      value: "87%",
      label: "Mais Agilidade",
      desc: "Validação de motoristas em tempo recorde."
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-yellow-400" />,
      value: "Economia",
      label: "Operacional",
      desc: "Menos tempo gasto com processos manuais."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />,
      value: "Total",
      label: "Confiabilidade",
      desc: "Dados validados em fontes oficiais e privadas."
    }
  ];

  return (
    <section data-reveal id="beneficios" className="py-16 sm:py-20 bg-dark">
      <Container>
        <SectionHeader title="Impacto Real no Seu Negócio" />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-reveal-children
          data-reveal-children-delay="70"
        >
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="text-center group hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{benefit.value}</div>
              <div className="text-brand-primary font-semibold mb-2">{benefit.label}</div>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
