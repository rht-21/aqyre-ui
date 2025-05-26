import MainSidebar from "@/components/sections/MainSidebar";
import PathNav from "@/components/utility/path-nav";
import { SidebarData } from "@/constant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs - Aqyre UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-row h-[calc(100dvh-65px)]">
        <MainSidebar
          data={SidebarData}
          className="max-sm:hidden max-lg:max-w-[160px] h-full overflow-auto"
        />
        <section
          id="scrollable-section"
          className="w-full sm:px-8 p-4 h-full overflow-y-auto sm:border-l"
        >
          <PathNav />
          <div className="flex gap-8 relative my-2">{children}</div>
        </section>
      </main>
    </>
  );
}
