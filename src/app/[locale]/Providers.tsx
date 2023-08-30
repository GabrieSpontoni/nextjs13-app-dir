"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { RenderCondition } from "@/utils/RenderCondition";
import { urlsWithoutSidebar } from "@/utils/sidebar";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

export function Providers({ children }: React.PropsWithChildren<{}>) {
  const pathname = usePathname();
  const showSidebar = !!pathname && !urlsWithoutSidebar.includes(pathname);
  return (
    <ThemeProvider>
      <Header />
      <RenderCondition condition={showSidebar}>
        <Sidebar>{children}</Sidebar>
      </RenderCondition>

      <RenderCondition condition={!showSidebar}>{children}</RenderCondition>
    </ThemeProvider>
  );
}
