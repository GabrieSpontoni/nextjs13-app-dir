import { ParamsLocaleModel } from "@/types/paramsLocale";
import { getTranslator } from "next-intl/server";
import NextImage from "next/image";

interface HeroProps extends ParamsLocaleModel {}

export async function Hero({ params }: HeroProps) {
  const t = await getTranslator(params.locale, "Hero");
  return (
    <div className="hero min-h-screen bg-base-200 relative z-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <NextImage
            src="/images/gabriel-spontoni.jpg"
            alt="Picture of the author"
            className="max-w-sm rounded-lg shadow-2xl filter brightness-75"
            width={280}
            height={200}
          />
        </div>

        <div className="animate-flip-up">
          <h1 className="text-5xl font-bold">Gabriel Spontoni</h1>
          <p className="py-6">{t("description")}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
