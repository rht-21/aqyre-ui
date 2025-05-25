import React from "react";

const Homepage = () => {
  return (
    <main>
      <div
        role="banner"
        className="flex flex-col items-center gap-2 py-10 sm:py-16 md:py-20"
      >
        <h1>UI, Uncomplicated.</h1>
        <h1>
          Think <span className="text-aqyre-primary">Less</span>. Build{" "}
          <span className="text-aqyre-primary">More</span>.
        </h1>
        <p className="max-w-2xl mt-4 sm:mt-8 text-sm sm:text-xl leading-relaxed text-muted-foreground text-center">
          Cut the noise. Build sleek, accessible interfaces in record time.
          <br />
          Pre-built components that handle the details, so you can focus on
          features.
        </p>
      </div>
    </main>
  );
};

export default Homepage;
