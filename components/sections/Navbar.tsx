"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "../utility/logo";
import { IconBrandGithub, IconMenu } from "@tabler/icons-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types";
import { NavList, SidebarData } from "@/constant";
import ThemeToggle from "../utility/theme-toggle";
import GlobalSearch from "../utility/global-search";

const SidebarHeader = ({ text }: { text: string }) => {
  return <h4 className="font-medium tracking-wide px-4 my-2">{text}</h4>;
};

const SidebarItem = ({
  text,
  link,
  setOpen,
}: {
  text: string;
  link: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const path = usePathname();

  return (
    <Link
      onClick={() => setOpen(false)}
      href={link}
      className={cn(
        "font-light text-sm py-2 px-4 rounded-md duration-150 block hover:bg-muted",
        path === link ? "text-aqyre-primary" : ""
      )}
    >
      {text}
    </Link>
  );
};

const MainSidebar = ({
  data,
  setOpen,
  className,
}: {
  data: SidebarProps;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => {
  return (
    <aside
      className={cn(
        "max-w-[240px] w-full h-full py-4 flex flex-col justify-start gap-2 overflow-y-auto",
        className
      )}
    >
      {Object.entries(data).map(([section, items]) => {
        const sortedItems =
          section === "Components"
            ? [...items].sort((a, b) => a.label.localeCompare(b.label))
            : items;

        return (
          <div key={section}>
            <SidebarHeader text={section} />
            {sortedItems.map((item) => (
              <SidebarItem
                key={item.href}
                text={item.label}
                link={item.href}
                setOpen={setOpen ? setOpen : () => {}}
              />
            ))}
          </div>
        );
      })}
    </aside>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="w-8 h-8 hidden max-sm:flex items-center justify-center rounded-md cursor-pointer group">
        <IconMenu stroke={1.5} size={20} className="text-foreground/70" />
      </SheetTrigger>
      <SheetContent className="px-2 pt-10">
        <DialogTitle className="sr-only">Navigation</DialogTitle>
        <MainSidebar data={SidebarData} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

const Navbar = () => {
  return (
    <header className="w-full sticky bg-background z-50 top-0 border-b">
      <nav className="max-w-[1400px] mx-auto h-16 px-4 flex items-center justify-between sm:gap-6 gap-4">
        <div
          role="navigation"
          className="flex items-center lg:gap-8 md:gap-6 gap-4"
        >
          <Logo />
          <ul className="hidden sm:flex items-center md:gap-8 gap-4">
            {NavList.map(({ label, href }) => (
              <li key={href} className="text-sm group">
                <Link
                  href={href}
                  className="duration-150 group-hover:text-aqyre-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          role="navigation"
          className="flex items-center justify-end gap-2 w-full"
        >
          <GlobalSearch />
          <ThemeToggle />
          <Link
            href="https://github.com/rht-21/aqyre-ui"
            target="_blank"
            className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer group"
          >
            <IconBrandGithub
              size={20}
              stroke={1.5}
              className="text-foreground/70 duration-150 group-hover:text-aqyre-primary"
            />
          </Link>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
