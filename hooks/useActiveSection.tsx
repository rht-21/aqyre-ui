import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[]) => {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(
            (entry) => entry.isIntersecting || entry.intersectionRatio > 0
          )
          .map((entry) => entry.target.id);

        setVisibleIds((prev) => {
          // Avoid unnecessary updates
          const same =
            visible.length === prev.length &&
            visible.every((id) => prev.includes(id));
          return same ? prev : visible;
        });
      },
      {
        root: null,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // multiple points for better precision
        rootMargin: "0px 0px -30% 0px", // ensures top section triggers early
      }
    );

    const elements: HTMLElement[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [ids]);

  return visibleIds;
};
