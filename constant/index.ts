import { SidebarProps } from "@/types";

export const NavList = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "Contribute", href: "/contribute" },
];

export const SidebarData: SidebarProps = {
  Docs: [
    { label: "Introduction", href: "/docs", alias: "introduction" },
    { label: "Installation", href: "/docs/setup"},
    { label: "Contribute", href: "/contribute" },
  ],

  Components: [
    { label: "Button", href: "/components/button"},
    { label: "Reveal Button", href: "/components/reveal-button" },
  ],
};
