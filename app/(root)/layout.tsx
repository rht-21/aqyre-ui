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
      <main className="flex-row">
        <MainSidebar data={SidebarData} className="max-sm:hidden" />
        <section className="w-full p-4 h-full overflow-y-auto relative">
          <PathNav />
          <div className="flex gap-8 relative my-2">{children}</div>
        </section>
      </main>
    </>
  );
}
