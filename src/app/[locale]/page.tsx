import { ParamsLocaleModel } from "@/types/paramsLocale";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

interface HomeProps extends ParamsLocaleModel {}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <Header />
      <Hero params={params} />
      <Projects />
      <Footer />
    </main>
  );
}
