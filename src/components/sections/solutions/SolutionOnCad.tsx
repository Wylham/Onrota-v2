import React from 'react';
import { UserPlus } from '@phosphor-icons/react';
import { Card, Button } from '../../ui/Base';

export const SolutionOnCad: React.FC = () => {
  const steps = [
    { num: 1, title: "Envio do Link", desc: "Motorista recebe link via WhatsApp" },
    { num: 2, title: "Preenchimento", desc: "Upload simples de documentos" },
    { num: 3, title: "Validação OCR", desc: "Extração automática de dados" },
    { num: 4, title: "Check-in", desc: "Verificação de regras de negócio" },
    { num: 5, title: "Integração", desc: "Envio para TMS/ERP" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-6 text-center lg:text-left">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                <UserPlus className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">OnCad</h3>
        </div>
        <p className="text-xl text-gray-400 font-light">Cadastro Automatizado</p>
        <p className="text-gray-300">
          Esqueça a digitação manual. Com o OnCad, o motorista faz o próprio cadastro pelo celular, 
          nossa IA valida os documentos e insere os dados diretamente no seu sistema.
        </p>

        <div className="flex flex-wrap gap-2 pt-4 justify-center lg:justify-start">
            {['ATUA', 'SAT', 'Sankhya', 'KMM'].map((erp) => (
                <span key={erp} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                    {erp}
                </span>
            ))}
        </div>
        
        <Button className="mt-4 mx-auto lg:mx-0" onClick={() => window.location.href='#contato'}>
            Solicitar Demo
        </Button>
      </div>

      <div className="relative">
         <Card className="border-brand-primary/20">
            <h4 className="text-white font-semibold mb-6">Fluxo de Cadastro</h4>
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={step.num} className="flex gap-4 relative">
                        {index !== steps.length - 1 && (
                            <div className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-white/10" />
                        )}
                        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm z-10 shrink-0">
                            {step.num}
                        </div>
                        <div>
                            <h5 className="text-white font-medium">{step.title}</h5>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
         </Card>
      </div>
    </div>
  );
};
