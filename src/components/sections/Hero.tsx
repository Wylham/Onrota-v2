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

const HERO_AVATARS = [
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=5",
];
const HERO_PRODUCTS_MAX = HERO_PRODUCTS.reduce((longest, current) =>
  current.length > longest.length ? current : longest,
);

type ClientLogo = {
  src: string;
  alt: string;
  scale?: number;
  gapAfter?: number;
};

const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/img/clientes/pianettoUI.svg", alt: "Cliente 01" },
  { src: "/img/clientes/adaptaUI.svg", alt: "Cliente 02" },
  {
    src: "/img/clientes/anderle_white.svg",
    alt: "Cliente 03",
    scale: 1.24,
    gapAfter: 20,
  },
  { src: "/img/clientes/boaviagem.png", alt: "Cliente 04", scale: 2.24 },
  { src: "/img/clientes/bellunoUI.svg", alt: "Cliente 05" },
  { src: "/img/clientes/agrotanUI.svg", alt: "Cliente 06" },
  { src: "/img/clientes/a5logUI.svg", alt: "Cliente 07" },
  { src: "/img/clientes/scdUI.svg", alt: "Cliente 08" },
];

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

const LogoMarquee: React.FC = () => {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const frameRef = React.useRef<number>();
  const lastTimeRef = React.useRef<number>(0);
  const offsetRef = React.useRef<number>(0);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const step = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 8000; // seconds
      lastTimeRef.current = time;

      const speedPxPerSec = isHovering ? 28 : 70;
      const track = trackRef.current;
      if (track) {
        const loopWidth = track.scrollWidth / 2;
        offsetRef.current =
          (offsetRef.current + speedPxPerSec * delta) % loopWidth;
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isHovering]);

  return (
    <div
      className="logo-marquee w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocusCapture={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      <div className="logo-marquee__track" ref={trackRef}>
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
          <div
            key={`${logo.alt}-${idx}`}
            className="logo-marquee__item"
            style={
              logo.gapAfter ? { marginRight: `${logo.gapAfter}px` } : undefined
            }
            aria-hidden={idx >= CLIENT_LOGOS.length}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-9 sm:h-10 w-auto max-w-[160px] opacity-90 transition-opacity duration-200"
              style={
                logo.scale
                  ? {
                      transform: `scale(${logo.scale})`,
                      transformOrigin: "center",
                    }
                  : undefined
              }
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroClientCard: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] lg:rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0f1d3d]/75 via-[#0c3c93]/70 to-[#0a7bff]/75 px-6 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8 shadow-[0_10px_60px_rgba(10,123,255,0.35)] backdrop-blur-lg ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(84,183,255,0.18),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.25),transparent_55%)]" />
      <div className="relative space-y-5 text-white">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
          <span className="block">Mova-se mais rápido.</span>
          <span className="block text-[#51d6ff]">Pense grande.</span>
        </h2>
        <p className="text-sm sm:text-base text-white/85 max-w-md">
          Transformando negócios com soluções de ponta
        </p>
        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-3">
            {HERO_AVATARS.map((src, idx) => (
              <span
                key={src}
                className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white/70 shadow-md overflow-hidden bg-white/10"
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
            <div className="text-xl sm:text-2xl font-semibold">1.000 mil</div>
            <div className="text-sm text-white/85">Clientes satisfeitos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24 flex items-start lg:items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-b from-transparent via-black/55 to-black/100" />
      </div>
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-w-0 w-full">
          <div
            className="space-y-7 sm:space-y-9 animate-fade-in-up text-left max-w-3xl mx-0 min-w-0 w-full"
          >
            <Badge className="relative overflow-hidden bg-white/5 text-white/90 border-white/15 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.07),0_0_35px_rgba(29,167,229,0.22)] px-4 py-1 text-sm before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] before:opacity-50 before:animate-pulse">
              <span className="relative z-10">
                Mais segurança, menos riscos:
              </span>
            </Badge>
            <h1 className="font-bold tracking-tighter leading-[1.05] text-white text-balance">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl lg:whitespace-nowrap">
                O futuro do transporte
              </span>
              <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl lg:whitespace-nowrap">
                <span className="inline-block">é <TypingProduct /></span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xl mx-0">
              Reduza fraudes, automatize cadastros e valide motoristas em
              segundos. A plataforma completa para Gerenciadoras de Risco e
              Transportadoras.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start justify-start w-full max-w-xl mx-0">
              <Button
                size="lg"
                className="gap-2 group w-fit justify-center text-base sm:text-lg px-5 sm:px-8 py-2.5 sm:py-3.5"
                onClick={() => (window.location.href = "#contato")}
              >
                Falar com especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 w-fit justify-center text-base sm:text-lg px-5 sm:px-8 py-2.5 sm:py-3.5"
                onClick={() => (window.location.href = "#solucoes")}
              >
                Ver soluções
              </Button>
            </div>

            <div className="lg:hidden w-full max-w-lg">
              <HeroClientCard className="w-full" />
            </div>
          </div>

          <div className="relative hidden lg:flex h-[520px] w-full items-center justify-center">
            <HeroClientCard className="w-fit max-w-lg" />
          </div>
        </div>
        <div className="mt-10 sm:mt-12 lg:mt-12 space-y-8 sm:space-y-9">
          <div className="flex items-center text-sm sm:text-base text-white justify-center lg:justify-start">
            <span>Aprovado por algumas das maiores empresas do transporte</span>
          </div>
          <LogoMarquee />
        </div>
      </Container>
    </section>
  );
};
