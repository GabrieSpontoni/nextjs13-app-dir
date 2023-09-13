import { ParamsLocaleModel } from "@/types/paramsLocale";
import { Hero } from "@/app/[locale]/components/Hero";
import { Footer } from "@/app/[locale]/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "./components/Projects";

interface HomeProps extends ParamsLocaleModel {}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      Test
      <Header withMenuHamburguer={false} />
      <Hero params={params} />
      <Projects />
      <Footer />
    </main>
  );
}
