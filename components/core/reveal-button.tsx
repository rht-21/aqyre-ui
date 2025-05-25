"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

const buttonVariants = cva(
  "group relative inline-flex w-fit items-center justify-center text-sm cursor-pointer overflow-hidden rounded-md px-6 font-medium [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        outline:
          "border border-foreground text-foreground hover:bg-foreground hover:text-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

const RevealButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      asChild = false,
      variant,
      size,
      leftIcon,
      rightIcon,
      href,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        onClick={() => {
          if (href) {
            redirect(href);
          }
        }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span className="sm:mr-0 mr-2 sm:w-0 sm:-translate-x-[100%] sm:opacity-0 transition-all duration-200 group-hover:mr-2 sm:group-hover:w-5 sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
            {leftIcon}
          </span>
        )}
        {props.children}
        {rightIcon && (
          <span className="sm:w-0 sm:translate-x-[100%] sm:ml-0 ml-2 sm:opacity-0 transition-all duration-200 sm:group-hover:w-5 sm:group-hover:translate-x-0 sm:group-hover:ml-2 sm:group-hover:opacity-100">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);
RevealButton.displayName = "RevealButton";

export { RevealButton, buttonVariants };
