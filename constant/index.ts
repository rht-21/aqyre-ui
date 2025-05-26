import { SidebarProps } from "@/types";

export const NavList = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  // { label: "Contribute", href: "/contribute" },
];

export const SidebarData: SidebarProps = {
  Docs: [
    { label: "Introduction", href: "/docs" },
    { label: "Installation", href: "/docs/setup", alias: "Getting Started" },
    // { label: "Contribute", href: "/contribute" },
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
    { id: "requirements", title: "Frameworks and Libraries" },
    { id: "nextjs-docs", title: "Setup Next.js" },
    { id: "react-docs", title: "Setup Vite" },
    { id: "tabler-docs", title: "Tabler Icons" },
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
  installation: {
    requirements: [
      {
        title: "Next.js (Recommended)",
        description:
          "Although Aqyre UI works in any React environment, it's optimized for Next.js projects. Ensure you're using Next.js with Node.js v18+ for best performance and compatibility.",
        href: "nextjs-docs",
      },
      {
        title: "Vite (React)",
        description:
          "Aqyre UI components are built using modern React features like hooks and concurrent rendering. Ensure your project is running React version 18 or newer to take full advantage of the library.",
        href: "react-docs",
      },
      {
        title: "Tabler Icons",
        description:
          "Aqyre uses Tabler Icons to provide consistent, lightweight SVG icons. Installation is required for icon-based components to work out-of-the-box.",
        href: "tabler-docs",
      },
    ],
    vite: {
      setup: `npm create vite@latest`,
      tailwind: `npm install tailwindcss @tailwindcss/vite`,
      css: `@import "tailwindcss";`,
      tsconfig: `{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`,
      tsconfig_app: `{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}`,
      types: `npm install -D @types/node`,
      vite_config: `import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
`,
    },
    shadcn: {
      setup: `npx shadcn@latest init`,
      color: `Which color would you like to use as base color? > Neutral`,
      component: `npx shadcn@latest add button`,
      usage: `import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
  )
}

export default App
`,
    },
    nextjs: {
      setup: `npx shadcn@latest init`,
      component: `cd aqyre-ui
npm install aqyre-uinpx shadcn@latest add button
`,
      usage: `import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
`,
    },
    tabler: {
      setup: `npm install @tabler/icons-react`,
      usage: `import { IconMoodSmile } from '@tabler/icons-react';
 
export default function Home() {
  return (
    <div>
      <IconMoodSmile stroke={1.5} />
    </div>
  );
}`,
    },
  },
};
