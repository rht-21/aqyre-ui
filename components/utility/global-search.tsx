"use client";

import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useMemo, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { SidebarData } from "@/constant";

type Item = { label: string; href: string };

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const components: Item[] = SidebarData["Components"] || [];

    if (!query) return components.slice(0, 3);
    return components.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Mobile Screen */}
      <button
        onClick={() => setOpen(true)}
        className="w-8 h-8 max-sm:flex hidden items-center justify-center rounded-md cursor-pointer group"
      >
        <IconSearch
          stroke={1.5}
          className="text-foreground/70 duration-150 group-hover:text-foreground"
          size={20}
        />
      </button>

      {/* Desktop Screen */}
      <button
        onClick={() => setOpen(true)}
        className="h-10 px-4 hidden sm:flex items-center justify-center rounded-xl border-[0.5px] border-foreground/20 gap-4 cursor-pointer group duration-150"
      >
        <IconSearch
          stroke={1.5}
          size={16}
          className="max-sm:hidden text-foreground/70 duration-150"
        />
        <small className="text-foreground/70 duration-150 group-hover:text-foreground">
          Search Components
        </small>
        <kbd className="max-md:hidden pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-[10px]">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search components..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Components">
            {filteredItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  setOpen(false);
                  window.location.href = item.href;
                }}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default GlobalSearch;
