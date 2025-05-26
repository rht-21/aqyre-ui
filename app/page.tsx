import Hero from "@/components/sections/Hero";
import React from "react";

const Homepage = () => {
  return (
    <main className="relative px-4">
      <span className="absolute top-1/2 left-1/2 translate-[-50%] h-full aspect-square w-auto rounded-full bg-aqyre-primary -z-10 blur-[200px] opacity-40 dark:opacity-30" />
      <Hero />
    </main>
  );
};

export default Homepage;
