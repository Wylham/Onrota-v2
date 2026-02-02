import React from 'react';
import { Container, SectionHeader } from '../ui/Base';
import { Essence } from './Essence';
import { MissionVisionValues } from './MissionVisionValues';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="quem-somos" className="py-16 sm:py-24 bg-dark relative">
      <Container>
        <SectionHeader
          title="Quem Somos"
          subtitle="Mais do que uma plataforma, somos parceiros estratégicos para o sucesso da sua operação logística."
        />

        <div className="max-w-4xl mx-auto text-center text-base sm:text-lg text-gray-300 mb-12 sm:mb-16">
          <p>
            A <span className="text-brand-primary font-bold">OnRota</span> nasceu para revolucionar a gestão de risco no transporte.
            Combinamos inteligência de dados, automação e um profundo conhecimento do setor para entregar
            soluções que protegem sua carga e aceleram seus processos.
          </p>
        </div>

        <Essence />
        <MissionVisionValues />
      </Container>
    </section>
  );
};
