import { ParamsLocaleModel } from "@/types/paramsLocale";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface HomeProps extends ParamsLocaleModel {}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <Header withMenuHamburguer={false} />
      <Hero params={params} />
      <Projects />
      <Footer />
    </main>
  );
}
