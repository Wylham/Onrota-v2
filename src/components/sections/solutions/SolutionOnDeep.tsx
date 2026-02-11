import React from 'react';
import { MagnifyingGlass, FileMagnifyingGlass } from '@phosphor-icons/react';
import { Card, Button } from '../../ui/Base';

export const SolutionOnDeep: React.FC = () => {
  return (
    <div
      data-reveal
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
    >
       <div
         className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
         data-reveal-children
         data-reveal-children-delay="60"
       >
            {['Histórico Judicial', 'Situação CNH', 'Vínculos Profissionais', 'Validação Doc'].map((item) => (
                <Card key={item} className="text-center py-6 hover:bg-white/5 transition-colors cursor-default">
                    <FileMagnifyingGlass className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-300">{item}</span>
                </Card>
            ))}
       </div>

      <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="p-3 bg-blue-400/10 rounded-xl text-blue-400">
                <MagnifyingGlass className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">OnDeep</h3>
        </div>
        <p className="text-xl text-gray-400 font-light">Deep Search</p>
        <p className="text-gray-300">
            Uma busca profunda em camadas de dados públicos e privados. 
            O OnDeep encontra informações que consultas superficiais não revelam, protegendo sua operação de fraudadores sofisticados.
        </p>
        
        <Button variant="outline" className="mt-4 mx-auto lg:mx-0" onClick={() => window.location.href='#contato'}>
            Fazer Consulta
        </Button>
      </div>
    </div>
  );
};
