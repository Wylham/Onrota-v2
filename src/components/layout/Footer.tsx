import React from 'react';
import { Container } from '../ui/Base';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-dark pt-12 sm:pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg">
                  O
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  On<span className="text-brand-primary">Rota</span>
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Inovação e segurança para o transporte rodoviário de cargas. 
              Tecnologia de ponta para gestão de risco e logística eficiente.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#solucoes" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">Soluções</a></li>
              <li><a href="#consultoria" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">Consultoria</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">Benefícios</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} OnRota Tech. Todos os direitos reservados.
          </p>
          <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
            O Futuro do Transporte é OnRota
          </p>
        </div>
      </Container>
    </footer>
  );
};
