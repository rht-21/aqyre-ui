import React from "react";
import { Button } from "../../core/button";
import { RevealButton } from "../../core/reveal-button";
import { IconArrowRight } from "@tabler/icons-react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div
      role="banner"
      className="flex flex-col items-start sm:items-center gap-2 py-10 sm:py-16 md:py-20 lg:py-32 z-10"
    >
      <button className="px-6 py-1.5 border border-aqyre-primary bg-[linear_gradient] duration-150 rounded-full text-sm">
        Style Efficiently &#128640;
      </button>
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
        <div
          role="group"
          className="flex items-center justify-center gap-2 w-[360px] max-sm:w-full"
        >
          <RevealButton
            rightIcon={<IconArrowRight stroke="1.5" />}
            href="/docs"
            className="flex-1"
          >
            Get Started
          </RevealButton>
          <Button variant="outline" href="/components" className="flex-1">
            Explore Components
          </Button>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
