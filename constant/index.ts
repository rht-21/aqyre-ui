import { SidebarProps } from "@/types";

export const NavList = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "Contribute", href: "/contribute" },
];

export const SidebarData: SidebarProps = {
  Docs: [
    { label: "Introduction", href: "/docs" },
    { label: "Installation", href: "/docs/setup", alias: "Getting Started" },
    { label: "Contribute", href: "/contribute" },
  ],

  Components: [
    { label: "Button", href: "/components/button" },
    { label: "Reveal Button", href: "/components/reveal-button" },
  ],
};

export const TrackerData = {
  docs: [
    { id: "overview", title: "Introduction" },
    { id: "how-to-use", title: "How to Use" },
    { id: "prerequisites", title: "Prerequisites" },
    { id: "why-aqyreui", title: "Why Aqyre UI?" },
  ],
  setup: [
    { id: "overview", title: "Getting Started" },
    { id: "prerequisites", title: "Install Prerequisites" },
    { id: "install-tabler", title: "Tabler Icons" },
  ],
};

export const Data = {
  introduction: {
    why_aqyre: [
      {
        title: "Copy-Paste Simplicity",
        description:
          "No package installations or configuration needed — just grab the code you need and paste it directly into your project.",
      },
      {
        title: "Handcrafted + ShadCN Powered",
        description:
          "While many components are refined versions of ShadCN, some are uniquely designed from scratch to bring extra personality and motion.",
      },
      {
        title: "Subtle Animations",
        description:
          "Select components include fluid, performance-friendly animations that enhance UX without overwhelming the interface.",
      },
      {
        title: "Headless & Composable",
        description:
          "Built with headless architecture so you can control markup, styling, and behavior without limitations.",
      },
      {
        title: "Accessibility First",
        description:
          "Follows WAI-ARIA and Radix UI guidelines to make sure your app works for everyone.",
      },
      {
        title: "Tailwind Native",
        description:
          "Crafted with Tailwind CSS for easy customization, theming, and consistency across your design system.",
      },
      {
        title: "Dark Mode Ready",
        description:
          "All components come with dark mode support out of the box using Tailwind's dark variant.",
      },
      {
        title: "DX-Focused",
        description:
          "TypeScript support, intelligent defaults, and simple APIs ensure smooth development from start to finish.",
      },
    ],
    prerequisites: [
      {
        title: "React (v18 or above)",
        description: "Set up a modern React project",
        href: "https://react.dev/learn/start-a-new-react-project",
      },
      {
        title: "Tailwind CSS",
        description: "Follow the Tailwind installation guide",
        href: "https://tailwindcss.com/docs/installation",
      },
      {
        title: "ShadCN UI (Optional)",
        description: "Install ShadCN UI for extended compatibility",
        href: "https://ui.shadcn.com/docs/installation",
      },
      {
        title: "Tabler Icons",
        description: "Browse and use clean, versatile icons",
        href: "https://tabler.io/icons",
        code: "npm i @tabler/icons-react",
      },
    ],
    how_to_use: [
      {
        title: "Browse",
        description:
          "Explore the component library and find the UI piece that fits your use case.",
      },
      {
        title: "Copy the Code",
        description:
          "Each component comes with ready-to-copy code — fully styled and responsive.",
      },
      {
        title: "Paste & Customize",
        description:
          "Paste the component into your codebase and tweak classes, props, or animations as needed.",
      },
    ],
  },
};
