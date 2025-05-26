"use client";

import React from "react";
import { Link } from "react-scroll";

const ScrollTo = ({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      containerId="scrollable-section"
      className="docs-a cursor-pointer"
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollTo;
