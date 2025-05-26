"use client";

import { TrackerData } from "@/constant";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePathname } from "next/navigation";
import React from "react";
import { Link } from "react-scroll";

const DocTracker = () => {
  const path = usePathname().split("/").pop();
  const sections = TrackerData[path as keyof typeof TrackerData];
  const ids = sections.map(({ id }) => id);
  const visibleIds = useActiveSection(ids);

  return (
    <aside>
      <section>
        <p className="font-medium mb-4">On this page</p>
        {sections.map(({ id, title }) => (
          <Link
            to={id}
            key={id}
            spy={true}
            smooth={true}
            offset={-32}
            containerId="scrollable-section"
            className={`block py-2 pl-4 text-sm cursor-pointer duration-150 font-light border-l ${
              visibleIds.includes(id)
                ? "border-aqyre-primary text-aqyre-primary"
                : "border-neutral-300 dark:border-neutral-700 hover:text-foreground"
            }`}
          >
            {title}
          </Link>
        ))}
      </section>
    </aside>
  );
};

export default DocTracker;
