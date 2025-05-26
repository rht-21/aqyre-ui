"use client";

import { TrackerData } from "@/constant";
import { usePathname } from "next/navigation";
import React from "react";
import { Link } from "react-scroll";

const DocTracker = () => {
  const path = usePathname().split("/").pop();
  return (
    <aside>
      <section>
        <p className="font-medium mb-4">On this page</p>
        {TrackerData[path as keyof typeof TrackerData].map(({ id, title }) => (
          <Link
            to={id}
            key={id}
            spy={true}
            smooth={true}
            offset={-32}
            containerId="scrollable-section"
            className={`block py-2 pl-4 cursor-pointer duration-150 hover:text-foreground font-light border-l border-aqyre-primary`}
          >
            {title}
          </Link>
        ))}
      </section>
    </aside>
  );
};

export default DocTracker;
