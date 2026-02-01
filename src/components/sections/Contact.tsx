import React from 'react';
import { Container, SectionHeader, Button, Card } from '../ui/Base';
import { Phone, EnvelopeSimple, MapPin, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-dark relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-primary/10 to-transparent pointer-events-none" />
      
      <Container>
        <SectionHeader title="Fale com a OnRota" subtitle="Estamos prontos para otimizar sua operação logística." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <Card className="p-6 sm:p-8">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                        <input type="text" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="Seu nome" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Empresa</label>
                        <input type="text" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="Sua transportadora" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                        <input type="tel" className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                        <textarea rows={4} className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors" placeholder="Como podemos ajudar?" />
                    </div>
                    <Button type="submit" className="w-full py-4 text-lg">
                        Enviar Mensagem
                    </Button>
                </form>
            </Card>

            {/* Info */}
            <div className="space-y-8 flex flex-col justify-center text-center lg:text-left">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Canais de Atendimento</h3>
                    <div className="space-y-4">
                        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 justify-center lg:justify-start">
                            <Phone className="w-6 h-6 text-brand-primary" />
                            <span>(44) 99999-9999</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 justify-center lg:justify-start">
                            <EnvelopeSimple className="w-6 h-6 text-brand-primary" />
                            <span>contato@onrota.tech</span>
                        </a>
                        <div className="flex items-center gap-4 text-gray-300 p-4 rounded-xl justify-center lg:justify-start">
                            <MapPin className="w-6 h-6 text-brand-primary" />
                            <span>Maringá - PR (EVOA)</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <a href="#" className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary/20 transition-all">
                            <InstagramLogo className="w-6 h-6" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary/20 transition-all">
                            <LinkedinLogo className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
};
