import { SidebarProps } from "@/types";

export const NavList = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "Contribute", href: "/contribute" },
];

export const SidebarData: SidebarProps = {
  Docs: [
    { label: "Introduction", href: "/docs", alias: "Getting Started" },
    { label: "Installation", href: "/docs/setup" },
    { label: "Contribute", href: "/contribute" },
  ],

  Components: [
    { label: "Button", href: "/components/button" },
    { label: "Reveal Button", href: "/components/reveal-button" },
  ],
};

export const TrackerData = {
  docs: [
    { id: "overview", title: "Getting Started" },
    { id: "why-aqyreui", title: "Why Aqyre UI?" },
    { id: "prerequisites", title: "Prerequisites" },
  ],
};

export const Data = {
  unique_features: [
    {
      title: "Headless & Composable",
      description:
        "Built with headless architecture so you can fully control markup, styling, and behavior without being locked into a specific design.",
    },
    {
      title: "Accessibility First",
      description:
        "Every component follows best practices from WAI-ARIA and Radix UI to ensure your app is usable by everyone.",
    },
    {
      title: "Tailwind Native",
      description:
        "Designed from the ground up for Tailwind CSS, making it easy to customize themes and scale your UI consistently.",
    },
    {
      title: "Dark Mode Support",
      description:
        "Components come with full dark mode compatibility using Tailwind's dark variant, ready to match your design system.",
    },
    {
      title: "Developer Experience Focused",
      description:
        "TypeScript support, clear props, and smart defaults make building with Aqyre UI fast, fun, and frustration-free.",
    },
    {
      title: "Minimal Yet Powerful",
      description:
        "No bloated styles or heavy dependencies—just clean, efficient components built for performance.",
    },
  ],
  prerequisites: [
    {
      title: "React (v18 or above)",
      description: "Set up a React project",
      href: "https://react.dev/learn/start-a-new-react-project",
    },
    {
      title: "Tailwind CSS",
      description: "Tailwind Installation Guide",
      href: "https://tailwindcss.com/docs/installation",
    },
    {
      title: "ShadCN UI",
      description: "Setup ShadCN UI",
      href: "https://ui.shadcn.com/docs/installation",
    },
    {
      title: "Tabler Icons",
      description: "Explore Icons",
      href: "https://tabler.io/icons",
    },
  ],
};
