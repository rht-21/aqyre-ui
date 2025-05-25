import { Button } from "@/components/core/button";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="items-center justify-center py-10 md:py-20 relative">
      <article className="border space-y-5 w-full max-w-md rounded-2xl py-10 px-5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-black/20 flex flex-col items-center shadow-2xl shadow-aqyre-primary/20">
        <Image
          src="/error.svg"
          alt="Error"
          width={256}
          height={256}
          className="invert-100"
        />
        <h3 className="text-2xl font-medium">Page Not Found!</h3>
        <p className="text-muted-foreground text-center">
          Sorry, we couldn't find the page you're looking for. The page might
          have been moved, deleted, or you entered the wrong URL.
        </p>
        <Button href="/" leftIcon={<IconArrowLeft stroke={1.5} />}>
          Return Home
        </Button>
      </article>
    </main>
  );
};

export default NotFoundPage;
