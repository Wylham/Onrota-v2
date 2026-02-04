import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Lightning,
  Database,
} from "@phosphor-icons/react";
import { Button, Container, Badge } from "../ui/Base";

const HERO_PRODUCTS = [
  "OnRota",
  "OnCad",
  "OnRisk",
  "OnID",
  "OnTrack",
  "OnDeep",
] as const;
const HERO_PRODUCTS_MAX = HERO_PRODUCTS.reduce((longest, current) =>
  current.length > longest.length ? current : longest,
);

const TypingProduct: React.FC = () => {
  const [productIndex, setProductIndex] = React.useState(0);
  const [typedProduct, setTypedProduct] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const TYPING_SPEED_MS = 210;
    const DELETING_SPEED_MS = 140;
    const PAUSE_AFTER_TYPE_MS = 1200;
    const PAUSE_AFTER_DELETE_MS = 250;

    const currentProduct =
      HERO_PRODUCTS[productIndex] ?? HERO_PRODUCTS[0] ?? "";
    const typedLength = typedProduct.length;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting) {
      if (typedLength < currentProduct.length) {
        timeoutId = setTimeout(() => {
          setTypedProduct(currentProduct.slice(0, typedLength + 1));
        }, TYPING_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE_MS);
      }
    } else {
      if (typedLength > 0) {
        timeoutId = setTimeout(() => {
          setTypedProduct(currentProduct.slice(0, typedLength - 1));
        }, DELETING_SPEED_MS);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setProductIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
        }, PAUSE_AFTER_DELETE_MS);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isDeleting, productIndex, typedProduct]);

  return (
    <span
      className="relative inline-block align-baseline whitespace-nowrap text-brand-primary"
      aria-live="polite"
    >
      <span className="invisible" aria-hidden="true">
        {HERO_PRODUCTS_MAX}
      </span>
      <span className="absolute inset-0">
        {typedProduct}
        <span
          className={`ml-1 text-[0.8em] font-thin leading-none ${
            isDeleting ? "opacity-50" : "opacity-0"
          }`}
        >
          |
        </span>
      </span>
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24 flex items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-right"
          style={{ backgroundImage: "url(/img/onrotaliquid.png)" }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7 sm:space-y-9 animate-fade-in-up">
            <Badge className="relative overflow-hidden bg-white/5 text-white/90 border-white/15 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.07),0_0_35px_rgba(29,167,229,0.22)] px-4 py-1 text-sm before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] before:opacity-50 before:animate-pulse">
              <span className="relative z-10">
                Mais segurança, menos riscos:
              </span>
            </Badge>
            <h1 className="font-bold tracking-tighter leading-[1.05] text-white">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl sm:whitespace-nowrap">
                O futuro do transporte
              </span>
              <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap">
                é <TypingProduct />
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xl">
              Reduza fraudes, automatize cadastros e valide motoristas em
              segundos. A plataforma completa para Gerenciadoras de Risco e
              Transportadoras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 group"
                onClick={() => (window.location.href = "#contato")}
              >
                Falar com especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30"
                onClick={() => (window.location.href = "#solucoes")}
              >
                Ver soluções
              </Button>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-white">96%</h3>
                <p className="text-sm text-gray-500">Redução de Fraudes</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-white">+1K</h3>
                <p className="text-sm text-gray-500">Motoristas/dia</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-white">24/7</h3>
                <p className="text-sm text-gray-500">Monitoramento</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block h-[520px] w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md rounded-3xl bg-[#0b0b0b] border border-white/10 p-6 shadow-[0_0_40px_rgba(29,167,229,0.12)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/15 flex items-center justify-center text-brand-primary">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Status da Validação
                      </div>
                      <div className="text-xs text-green-400">
                        Sistema Operacional
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">
                    Ao Vivo
                  </div>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 animate-pulse" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-24 bg-white/20 rounded" />
                        <div className="h-2 w-16 bg-white/10 rounded" />
                      </div>
                      <div className="h-6 w-16 bg-brand-primary/20 rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    Processando requisições...
                  </div>
                  <Lightning className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-0 w-64 p-4 bg-[#0b0b0b] border border-white/10 rounded-2xl -rotate-6">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-brand-accent" />
                <span className="text-sm text-gray-300">Integração TMS</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-brand-accent rounded-full" />
              </div>
            </div>

            <div className="absolute bottom-16 left-0 w-56 p-4 bg-[#0b0b0b] border border-white/10 rounded-2xl rotate-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Validado</span>
                <ShieldCheck className="w-5 h-5 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
