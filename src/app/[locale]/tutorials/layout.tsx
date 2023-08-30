import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <Sidebar>{children}</Sidebar>
    </section>
  );
}
