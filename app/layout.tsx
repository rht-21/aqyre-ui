import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const Bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const Jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Aqyre UI - Lightweight React UI Library Built on ShadCN",
  description:
    "Aqyre is a lightweight, efficient, and accessible React UI library built on top of ShadCN. Perfect for building fast, modern, and beautiful web interfaces with ease.",
  keywords: [
    "Aqyre UI",
    "React UI Library",
    "ShadCN UI",
    "Lightweight UI Kit",
    "React Components",
    "Tailwind CSS",
    "UI Library",
    "Component Library",
    "Frontend Development",
    "Modern UI Design",
  ],
  authors: [{ name: "RHT21", url: "https://rht21.xyz" }],
  creator: "RHT21",
  publisher: "RHT21",
  openGraph: {
    title: "Aqyre UI - Lightweight React UI Library Built on ShadCN",
    description:
      "Build fast and elegant web apps with Aqyre - a minimal and efficient React UI library powered by ShadCN and Tailwind CSS.",
    url: "https://aqyre.dev",
    siteName: "Aqyre UI",
    images: [
      {
        url: "https://aqyre.dev/logo.png",
        width: 1200,
        height: 630,
        alt: "Aqyre UI - React UI Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqyre UI - Lightweight ShadCN-Based React UI Library",
    description:
      "A developer-first UI library built on ShadCN, Aqyre helps you create sleek, fast, and accessible interfaces effortlessly.",
    images: ["https://aqyre.dev/logo.png"],
    creator: "@itsrht21",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Bricolage.variable} ${Jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
