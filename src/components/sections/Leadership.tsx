import React from 'react';
import { Container, SectionHeader, Card } from '../ui/Base';

export const Leadership: React.FC = () => {
  return (
    <section id="lideranca" className="py-16 sm:py-20 bg-[#0a0a0a]">
      <Container>
        <SectionHeader title="Liderança" />
        <div className="flex justify-center">
            <Card className="max-w-md w-full text-center p-6 sm:p-8 border-brand-accent/20">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-brand-primary to-brand-accent rounded-full p-1 mb-6">
                    <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-4xl text-white font-bold">EM</span>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Evelyn Martins</h3>
                <p className="text-brand-primary font-medium mb-4">CEO & Founder</p>
                <p className="text-gray-400 text-sm">
                    Especialista em gestão de risco e logística, liderando a inovação no setor de transportes através da tecnologia.
                </p>
            </Card>
        </div>
      </Container>
    </section>
  );
};
