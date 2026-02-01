import React from 'react';
import { Container, SectionHeader, Card } from '../ui/Base';
import { Briefcase, Shield, Gear } from '@phosphor-icons/react';

export const Consulting: React.FC = () => {
  const steps = [
    { num: "01", title: "Diagnóstico", desc: "Análise profunda dos processos atuais" },
    { num: "02", title: "Planejamento", desc: "Desenho da estratégia de segurança" },
    { num: "03", title: "Implementação", desc: "Execução com acompanhamento" },
    { num: "04", title: "Monitoramento", desc: "Gestão contínua de resultados" },
  ];

  return (
    <section id="consultoria" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <Container>
        <SectionHeader 
          title="Consultoria Especializada" 
          subtitle="Não vendemos apenas software. Entregamos inteligência e estratégia para sua gestão de risco."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="hover:border-brand-primary/40 group">
                <Briefcase className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Financeira</h3>
                <p className="text-gray-400 text-sm">Otimização de custos com sinistros e seguros.</p>
            </Card>
            <Card className="hover:border-brand-primary/40 group">
                <Shield className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Segurança</h3>
                <p className="text-gray-400 text-sm">Protocolos blindados contra novas modalidades de roubo.</p>
            </Card>
            <Card className="hover:border-brand-primary/40 group">
                <Gear className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Processos</h3>
                <p className="text-gray-400 text-sm">Fluxos operacionais ágeis e compliant.</p>
            </Card>
        </div>

        {/* Stepper Horizontal */}
        <div className="relative mb-20 hidden md:flex justify-between">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -z-10 -translate-y-1/2" />
            {steps.map((step) => (
                <div key={step.num} className="bg-dark p-4 flex flex-col items-center text-center max-w-[200px]">
                    <div className="w-12 h-12 rounded-full bg-brand-accent text-white font-bold flex items-center justify-center text-xl mb-3 shadow-[0_0_15px_rgba(56,32,184,0.5)]">
                        {step.num}
                    </div>
                    <h4 className="text-white font-semibold">{step.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{step.desc}</p>
                </div>
            ))}
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden space-y-6 mb-16">
             {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-brand-accent text-white font-bold flex items-center justify-center shrink-0">
                        {step.num}
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">{step.title}</h4>
                        <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-center text-white font-bold text-2xl mb-8">Resultados Comprovados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">30%</div>
                    <p className="text-brand-primary font-medium">Redução de Custos</p>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">85%</div>
                    <p className="text-brand-primary font-medium">Aprovação de Clientes</p>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
                    <p className="text-brand-primary font-medium">Assertividade</p>
                </div>
            </div>
            <div className="text-center mt-8">
                 <button 
                    onClick={() => window.location.href='#contato'}
                    className="inline-flex items-center text-white border-b border-brand-primary hover:text-brand-primary transition-colors pb-1"
                >
                    Quero uma consultoria
                 </button>
            </div>
        </div>
      </Container>
    </section>
  );
};
