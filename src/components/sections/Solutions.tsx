import React from 'react';
import { Container, SectionHeader } from '../ui/Base';
import { SolutionOnRisk } from './solutions/SolutionOnRisk';
import { SolutionOnCad } from './solutions/SolutionOnCad';
import { SolutionOnTrack } from './solutions/SolutionOnTrack';
import { SolutionOnID } from './solutions/SolutionOnID';
import { SolutionOnDeep } from './solutions/SolutionOnDeep';

export const Solutions: React.FC = () => {
  return (
    <section id="solucoes" className="py-16 sm:py-20 lg:py-24 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <Container>
        <SectionHeader 
          title="Nossas Soluções" 
          subtitle="Um ecossistema completo de tecnologia para cada etapa da sua operação logística."
        />
        
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          <SolutionOnRisk />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <SolutionOnCad />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <SolutionOnTrack />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <SolutionOnID />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <SolutionOnDeep />
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Pronto para transformar sua operação?</h3>
             <button 
                onClick={() => window.location.href='#contato'}
                className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(29,167,229,0.4)] transition-all transform hover:scale-105"
             >
                Falar com um especialista agora
             </button>
        </div>
      </Container>
    </section>
  );
};

