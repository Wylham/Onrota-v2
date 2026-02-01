import React from 'react';
import { ShieldWarning, CheckCircle } from '@phosphor-icons/react';
import { Card, Button, Badge } from '../../ui/Base';

export const SolutionOnRisk: React.FC = () => {
  const modules = [
    "Validação de CNH",
    "Antecedentes Criminais",
    "Consulta ANTT",
    "Status do Veículo (CRLV)",
    "Dados Gerais",
    "Referências Profissionais"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
                <ShieldWarning className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">OnRisk</h3>
        </div>
        <p className="text-xl text-gray-400 font-light">Gestão de Risco Completa</p>
        <p className="text-gray-300">
          Analise o perfil de risco de motoristas e veículos em tempo real. Nossa plataforma cruza dados de múltiplas fontes para garantir a segurança da sua carga.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left">
            {modules.map((mod) => (
                <div key={mod} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-brand-primary" />
                    {mod}
                </div>
            ))}
        </div>

        <Button variant="outline" className="mt-4 mx-auto lg:mx-0" onClick={() => window.location.href='#contato'}>
            Solicitar Demo
        </Button>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-[80px] rounded-full" />
            <Card className="relative border-red-500/20 bg-dark/80 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <span className="text-white font-semibold">Análise de Perfil</span>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">Risco Crítico</Badge>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-gray-400">CNH</span>
                        <span className="text-green-400">Válida</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Antecedentes</span>
                        <span className="text-red-400">Ocorrência Encontrada</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full mt-4 overflow-hidden">
                        <div className="h-full w-[85%] bg-red-500 rounded-full" />
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2">Score de Risco: 85/100</p>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};
