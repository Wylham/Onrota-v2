import React, { useState, useEffect } from "react";
import { List, X, Phone } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button, Container } from "../ui/Base";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Quem Somos", to: "/quem-somos" },
    { label: "Soluções", to: "/#solucoes" },
    { label: "Consultoria", to: "/#consultoria" },
    { label: "Benefícios", to: "/#beneficios" },
    { label: "Contato", to: "/#contato" },
  ];
  const glassBase = isScrolled
    ? "bg-black/60 backdrop-blur-2xl"
    : "bg-black/45 backdrop-blur-xl";
  const glassMobileMenu =
    "bg-black/95 backdrop-blur-3xl bg-black/95 backdrop-blur-xl backdrop-saturate-250 ";
  const mobileMenuMotion = isMobileMenuOpen
    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
    : "opacity-0 -translate-y-1 scale-98 pointer-events-none";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${glassBase} ${
        isScrolled ? "shadow-[0_12px_30px_rgba(0,0,0,0.35)] py-3" : "py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo/Ativo-25-SF.webp"
              alt="OnRota"
              className="h-8 w-auto object-contain md:h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                window.open("https://wa.me/5544999999999", "_blank")
              }
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
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute top-full left-0 right-0 h-[calc(100vh-100%)] overflow-y-auto ${glassMobileMenu} border-b border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] origin-top transform-gpu transition-[opacity,transform] duration-300 ease-out ${mobileMenuMotion}`}
        aria-hidden={!isMobileMenuOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

