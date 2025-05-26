"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollable = document.getElementById("scrollable-section");
    scrollable?.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
