import { ParamsLocaleModel } from "@/types/paramsLocale";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

interface HomeProps extends ParamsLocaleModel {}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <Header />
      <Hero params={params} />
    </main>
  );
}
