"use client";

import { useEffect, useState } from "react";

/**
 * Retorna o id da seção que está cruzando a linha de leitura (40% da altura da tela).
 * O cálculo roda no máximo uma vez por frame e só gera nova renderização quando a seção muda.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const { innerHeight, scrollY } = window;
      const reachedBottom =
        scrollY > 0 &&
        innerHeight + scrollY >= document.documentElement.scrollHeight - 4;

      if (reachedBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= innerHeight * 0.4) {
          current = id;
        }
      }
      setActiveId(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sectionIds]);

  return activeId;
}
