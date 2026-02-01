import React from 'react';
import { Target, Eye, Heart } from '@phosphor-icons/react';
import { Card } from '../ui/Base';

export const MissionVisionValues: React.FC = () => {
  return (
    <div className="mt-20 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-brand-primary/10 to-transparent p-6 sm:p-8 rounded-2xl border border-brand-primary/20">
          <div className="flex items-center gap-4 mb-4">
            <Target className="w-8 h-8 text-brand-primary" />
            <h3 className="text-2xl font-bold text-white">Missão</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Transformar a logística através da tecnologia, garantindo segurança e agilidade para transportadoras e motoristas em todo o Brasil.
          </p>
        </div>

        <div className="bg-gradient-to-br from-brand-accent/10 to-transparent p-6 sm:p-8 rounded-2xl border border-brand-accent/20">
          <div className="flex items-center gap-4 mb-4">
            <Eye className="w-8 h-8 text-brand-accent" />
            <h3 className="text-2xl font-bold text-white">Visão</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Ser a referência nacional em inteligência logística e prevenção de fraudes, conectando o setor com soluções digitais inovadoras.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Heart className="w-6 h-6 text-red-500" />
          Nossos Valores
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {['Integridade', 'Precisão', 'Inovação', 'Responsabilidade', 'Colaboração'].map((val) => (
            <Card key={val} className="py-4 px-2 text-center border-white/5 bg-white/5 hover:bg-white/10">
              <span className="text-sm font-semibold text-white">{val}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
