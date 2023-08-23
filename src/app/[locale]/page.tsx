import { ParamsLocaleModel } from "@/types/paramsLocale";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

interface HomeProps extends ParamsLocaleModel {}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <Hero params={params} />
      <Projects />
      <Footer />
    </main>
  );
}
