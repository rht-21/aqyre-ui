"use client";

import { SidebarData } from "@/constant";
import { getNextObject } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";
import { RevealButton } from "../core/reveal-button";

const DocFooter = () => {
  const path = usePathname();

  const sortedComponents = SidebarData.Components.sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  const combinedComponents = [
    ...SidebarData.Docs.map(({ label, href }) => ({ label, href })),
    ...sortedComponents.map(({ label, href }) => ({ label, href })),
  ];

  const nextPage = getNextObject(path, combinedComponents);

  return (
    <footer className="pt-4 border-t flex items-center justify-between">
      <p className="text-neutral-600 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} Aqyre UI.{" "}
        <span className="hidden sm:inline">All rights reserved.</span>
      </p>
      {nextPage && (
        <RevealButton
          href={nextPage?.href}
          rightIcon={<IconArrowRight size={16} stroke={1.5} />}
        >
          {nextPage?.label}
        </RevealButton>
      )}
    </footer>
  );
};

export default DocFooter;
