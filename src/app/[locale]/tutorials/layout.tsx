import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export const metadata = {
  title: "Tutorials",
  description:
    "Tutorials about the main features and tutorials that are essential for the development of any Next.Js application.",
};

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
