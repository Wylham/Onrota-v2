import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
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
      className="relative inline-block align-baseline whitespace-nowrap text-white"
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

const heroBackgroundStyle: React.CSSProperties = {
  backgroundImage: "url(/img/onrotaliquid.png)",
};

export const Hero: React.FC = () => {
  return (
    <section
      data-reveal
      className="relative min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24 flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center lg:bg-[length:140%] lg:bg-[position:0%_50%]"
          style={heroBackgroundStyle}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-b from-transparent via-black/55 to-black/100" />
      </div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            data-reveal
            data-reveal-children
            data-reveal-children-delay="90"
            className="space-y-7 sm:space-y-9 animate-fade-in-up"
          >
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
          </div>

          <div
            data-reveal
            data-reveal-delay="120"
            className="relative hidden lg:flex h-[520px] w-full items-center justify-center"
          >
            <div className="relative w-fit max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0f1d3d]/75 via-[#0c3c93]/70 to-[#0a7bff]/75 px-9 py-8 shadow-[0_10px_60px_rgba(10,123,255,0.35)] backdrop-blur-lg">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(84,183,255,0.18),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.25),transparent_55%)]" />
              <div className="relative space-y-5 text-white">
                <h2 className="text-3xl font-semibold leading-snug">
                  <span className="block">Mova-se mais rápido.</span>
                  <span className="block text-[#51d6ff]">Pense grande.</span>
                </h2>
                <p className="text-base text-white/85 max-w-md">
                  Transformando negócios com soluções de ponta
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex -space-x-3">
                    {[
                      "https://i.pravatar.cc/80?img=32",
                      "https://i.pravatar.cc/80?img=12",
                      "https://i.pravatar.cc/80?img=5",
                    ].map((src, idx) => (
                      <span
                        key={src}
                        className="inline-block h-12 w-12 rounded-full border-2 border-white/70 shadow-md overflow-hidden bg-white/10"
                        style={{ zIndex: 3 - idx }}
                      >
                        <img
                          src={src}
                          alt="Cliente satisfeito"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </span>
                    ))}
                  </div>
                  <div className="leading-tight">
                    <div className="text-2xl font-semibold">1.000 mil</div>
                    <div className="text-sm text-white/85">
                      Clientes satisfeitos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
