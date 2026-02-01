import React from 'react';
import { MapTrifold, Lightning } from '@phosphor-icons/react';
import { Card, Button } from '../../ui/Base';

export const SolutionOnTrack: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="order-2 lg:order-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="bg-brand-accent/5 border-brand-accent/20">
                <Lightning className="w-6 h-6 text-brand-accent mb-3" />
                <h4 className="text-white font-bold">Tempo Real</h4>
                <p className="text-xs text-gray-400 mt-1">Monitoramento ativo da viagem</p>
            </Card>
            <Card className="bg-brand-primary/5 border-brand-primary/20">
                <MapTrifold className="w-6 h-6 text-brand-primary mb-3" />
                <h4 className="text-white font-bold">Rotas</h4>
                <p className="text-xs text-gray-400 mt-1">Alertas de desvio automático</p>
            </Card>
            <div className="sm:col-span-2 p-6 rounded-2xl border border-white/10 bg-dark/50 flex items-center justify-between">
                <span className="text-gray-300 font-mono text-sm">Status: Em trânsito</span>
                <span className="animate-pulse w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                <MapTrifold className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">OnTrack</h3>
        </div>
        <p className="text-xl text-gray-400 font-light">Rastreamento Inteligente</p>
        <p className="text-gray-300">
            Acompanhe sua frota e cargas com precisão. O OnTrack oferece visibilidade total da operação, 
            gerando alertas preventivos para garantir que a mercadoria chegue ao destino.
        </p>
        
        <div className="space-y-2">
            <h5 className="text-white font-semibold">Por que usar?</h5>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 text-left mx-auto lg:mx-0 max-w-md">
                <li>Prevenção de roubos</li>
                <li>Gestão de paradas não programadas</li>
                <li>Controle de jornada do motorista</li>
            </ul>
        </div>

        <Button variant="outline" className="mt-4 mx-auto lg:mx-0" onClick={() => window.location.href='#contato'}>
            Saiba Mais
        </Button>
      </div>
    </div>
  );
};

