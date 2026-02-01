import React from 'react';
import { Container, Card } from '../ui/Base';
import { Buildings, MapPin } from '@phosphor-icons/react';

export const Headquarters: React.FC = () => {
  return (
    <section id="sede" className="py-16 sm:py-20 bg-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Nossa Sede</h2>
            <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                    <Buildings className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">EVOA Aceleradora</h3>
                    <p className="text-gray-400">Maringá - PR</p>
                </div>
            </div>
            
            <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    Ambiente de inovação
                </li>
                <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    Conexão com grandes players
                </li>
                <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    Infraestrutura de ponta
                </li>
            </ul>

            <div className="p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-xl">
                <p className="text-brand-primary font-bold text-center">
                    OnRota + EVOA = mais segurança para você
                </p>
            </div>
          </div>

          <Card className="h-56 sm:h-64 flex items-center justify-center bg-white/5 border-dashed border-2 border-white/20">
             <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-500">Mapa da Localização</p>
                <p className="text-xs text-gray-600">(Google Maps Embed Placeholder)</p>
             </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
