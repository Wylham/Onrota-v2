import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollRevealOptions = {
  selector?: string;
  rootMargin?: string;
  threshold?: number;
};

const DEFAULT_SELECTOR = "[data-reveal]";

/**
 * Observa elementos com o atributo data-reveal e aplica a classe
 * .is-revealed quando entram na viewport. Também permite marcar um
 * contêiner com data-reveal-children para revelar todos os filhos
 * com atraso incremental.
 */
export const useScrollReveal = ({
  selector = DEFAULT_SELECTOR,
  rootMargin = "0px 0px -5% 0px",
  threshold = 0.08,
}: ScrollRevealOptions = {}) => {
  const location = useLocation();

  useEffect(() => {
    const childContainers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-children]")
    );

    childContainers.forEach((container) => {
      const delayStep =
        Number(container.dataset.revealChildrenDelay ?? "80") || 80;
      Array.from(container.children).forEach((node, index) => {
        const child = node as HTMLElement;
        if (child.hasAttribute("data-reveal")) return;
        child.setAttribute("data-reveal", "child");
        const delay = child.dataset.revealDelay ?? `${index * delayStep}`;
        child.style.setProperty("--reveal-delay", `${delay}ms`);
      });
    });

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-revealed");
            obs.unobserve(target);
          }
        });
      },
      { rootMargin, threshold }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("reveal")) {
        el.classList.add("reveal");
      }

      if (!el.style.getPropertyValue("--reveal-delay") && el.dataset.revealDelay) {
        el.style.setProperty("--reveal-delay", `${el.dataset.revealDelay}ms`);
      }

      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname, location.hash, selector, rootMargin, threshold]);
};

export const ScrollRevealRoot: React.FC = () => {
  useScrollReveal();
  return null;
};
