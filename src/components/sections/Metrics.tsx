import React from 'react';
import { Container } from '../ui/Base';

export const Metrics: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center text-white">
          <div>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-2">R$ 1B+</h3>
            <p className="text-base sm:text-lg md:text-xl opacity-90">Em cargas monitoradas mensalmente</p>
          </div>
          <div>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-2">1K+</h3>
            <p className="text-base sm:text-lg md:text-xl opacity-90">Cadastros validados diariamente</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
