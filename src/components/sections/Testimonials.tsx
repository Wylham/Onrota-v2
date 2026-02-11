import React from 'react';
import { Container, SectionHeader, Card } from '../ui/Base';
import { Quotes } from '@phosphor-icons/react';

export const Testimonials: React.FC = () => {
  return (
    <section data-reveal className="py-16 sm:py-20 bg-[#0a0a0a]">
      <Container>
        <SectionHeader title="Quem usa, confia" subtitle="Empresas líderes que transformaram sua gestão de risco com a OnRota." />
        
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-reveal-children
          data-reveal-children-delay="90"
        >
          <Card className="relative bg-gradient-to-b from-white/5 to-transparent">
            <Quotes className="absolute top-6 left-6 w-8 h-8 text-white/10" />
            <p className="text-gray-300 italic mb-6 pt-8">
              "A OnRota trouxe uma velocidade impressionante para nosso processo de cadastro. O que levava horas, hoje fazemos em minutos com muito mais segurança."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <h5 className="text-white font-bold text-sm">Diretoria</h5>
                <p className="text-gray-500 text-xs">Pianetto Transportes</p>
              </div>
            </div>
          </Card>

          <Card className="relative bg-gradient-to-b from-white/5 to-transparent">
            <Quotes className="absolute top-6 left-6 w-8 h-8 text-white/10" />
            <p className="text-gray-300 italic mb-6 pt-8">
              "A integração com nosso TMS foi perfeita. A ferramenta é intuitiva e o suporte é excepcional. Mudou nossa visão sobre gerenciamento de risco."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <h5 className="text-white font-bold text-sm">Gerente Operacional</h5>
                <p className="text-gray-500 text-xs">Boa Viagem Transportes</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
