import React from 'react';
import { Fingerprint, Scan } from '@phosphor-icons/react';
import { Button } from '../../ui/Base';

export const SolutionOnID: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-6 text-center lg:text-left">
        <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <Fingerprint className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white">OnID</h3>
        </div>
        <p className="text-xl text-gray-400 font-light">Identidade Digital</p>
        <p className="text-gray-300">
            Garanta que quem está dirigindo é realmente quem diz ser. 
            Utilizamos biometria facial e validação de documentos para criar uma identidade digital única e segura.
        </p>
        
        <Button className="mt-4 mx-auto lg:mx-0 bg-purple-600 hover:bg-purple-700" onClick={() => window.location.href='#contato'}>
            Ver Tecnologia
        </Button>
      </div>

      <div className="flex justify-center">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping opacity-20" />
            <div className="relative w-full h-full bg-dark/80 backdrop-blur-xl border border-purple-500/30 rounded-full flex flex-col items-center justify-center p-8 text-center">
                <Scan className="w-16 h-16 text-purple-400 mb-4" />
                <h4 className="text-white font-bold">Biometria Facial</h4>
                <p className="text-xs text-gray-500 mt-2">Liveness Detection Ativo</p>
            </div>
        </div>
      </div>
    </div>
  );
};
