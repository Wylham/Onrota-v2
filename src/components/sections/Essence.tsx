import React from 'react';
import { Shield, Lightning, TrendUp } from '@phosphor-icons/react';
import { Card } from '../ui/Base';

export const Essence: React.FC = () => {
  const pillars = [
    {
      icon: <Shield className="w-8 h-8 text-brand-primary" />,
      title: "Segurança",
      description: "Proteção de dados e validação rigorosa para minimizar riscos em cada operação."
    },
    {
      icon: <Lightning className="w-8 h-8 text-yellow-400" />,
      title: "Inovação",
      description: "Tecnologia de ponta e atualização constante para estar à frente do mercado."
    },
    {
      icon: <TrendUp className="w-8 h-8 text-green-400" />,
      title: "Eficiência",
      description: "Processos ágeis que economizam tempo e recursos da sua transportadora."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 sm:mt-12">
      {pillars.map((pillar, idx) => (
        <Card key={idx} className="text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
            {pillar.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
          <p className="text-gray-400 text-sm">{pillar.description}</p>
        </Card>
      ))}
    </div>
  );
};
