import React from "react";
import { RevealButton } from "../core/reveal-button";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div
      role="banner"
      className="flex flex-col items-start sm:items-center gap-2 py-10 sm:py-16 md:py-20 z-10"
    >
      <Fade direction="up" duration={1000} triggerOnce cascade damping={0.4}>
        <h1>UI, Uncomplicated.</h1>
        <h1>
          Think <span className="text-aqyre-primary">Less</span>. Build{" "}
          <span className="text-aqyre-primary">More</span>.
        </h1>
        <p className="max-w-3xl my-4 sm:my-8 text-sm sm:text-xl leading-relaxed text-muted-foreground text-left sm:text-center">
          Cut the noise. Build sleek, accessible interfaces in record time.
          <br />
          Pre-built components that handle the details, so you can focus on
          features.
        </p>
        <RevealButton
          rightIcon={<IconArrowUpRight stroke="1.5" />}
          href="/docs"
          className="min-w-[160px] w-full sm:text-base"
        >
          Get Started
        </RevealButton>
      </Fade>
    </div>
  );
};

export default Hero;
