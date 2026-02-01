import React from 'react';
import { ArrowRight, ShieldCheck, Lightning, Database } from '@phosphor-icons/react';
import { Button, Container, Badge } from '../ui/Base';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 flex items-center overflow-hidden bg-dark bg-grid-pattern bg-[size:30px_30px]">
      {/* Ambient Glows */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <Badge>Segurança Logística 4.0</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Logística com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Inteligência & Segurança
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
              Reduza fraudes, automatize cadastros e valide motoristas em segundos. 
              A plataforma completa para Gerenciadoras de Risco e Transportadoras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 group" onClick={() => window.location.href='#contato'}>
                Falar com especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href='#solucoes'}>
                Ver soluções
              </Button>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white">96%</h3>
                <p className="text-sm text-gray-500">Redução de Fraudes</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white">+1K</h3>
                <p className="text-sm text-gray-500">Motoristas/dia</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-sm text-gray-500">Monitoramento</p>
              </div>
            </div>
          </div>

          {/* Abstract Visual / Tech Mockup */}
          <div className="relative hidden lg:block h-[500px] w-full">
            {/* Main Floating Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-brand-primary/20 transform hover:scale-[1.02] transition-transform duration-500 z-20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Status da Validação</div>
                    <div className="text-xs text-green-400">Sistema Operacional</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">
                  Ao Vivo
                </div>
              </div>

              {/* Mock Data Lines */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="w-8 h-8 rounded bg-white/10 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-24 bg-white/20 rounded" />
                      <div className="h-2 w-16 bg-white/10 rounded" />
                    </div>
                    <div className="h-6 w-16 bg-brand-primary/20 rounded-full" />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                 <div className="text-xs text-gray-500">Processando requisições...</div>
                 <Lightning className="w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </div>

            {/* Floating Background Cards */}
            <div className="absolute top-10 right-0 w-64 p-4 bg-dark/40 backdrop-blur-md border border-white/5 rounded-xl -rotate-6 z-10 animate-float-slow">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-5 h-5 text-brand-accent" />
                <span className="text-sm text-gray-300">Integração TMS</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-brand-accent rounded-full" />
              </div>
            </div>

            <div className="absolute bottom-20 left-0 w-56 p-4 bg-dark/40 backdrop-blur-md border border-white/5 rounded-xl rotate-3 z-10 animate-float-delayed">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Validado</span>
                <ShieldCheck className="w-5 h-5 text-green-400" />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
