"use client";

import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarHeader = ({ text }: { text: string }) => {
  return <h4 className="font-medium tracking-wide mb-1">{text}</h4>;
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
        "max-w-[200px] w-full h-full py-4 flex flex-col justify-start gap-4",
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

export default MainSidebar;
