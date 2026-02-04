import React, { useState, useEffect } from 'react';
import { List, X, Phone } from '@phosphor-icons/react';
import { Button, Container } from '../ui/Base';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Consultoria', href: '#consultoria' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo/Ativo-25-SF.webp"
              alt="OnRota"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => window.open('https://wa.me/5544999999999', '_blank')}
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="w-full justify-center gap-2"
            onClick={() => window.open('https://wa.me/5544999999999', '_blank')}
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};
