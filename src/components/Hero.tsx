import { ParamsLocaleModel } from "@/types/paramsLocale";
import { getTranslator } from "next-intl/server";
import NextImage from "next/image";
import { IconBaseProps } from "react-icons/lib";
import {
  SiChakraui,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface HeroProps extends ParamsLocaleModel {}

export async function Hero({ params }: HeroProps) {
  const t = await getTranslator(params.locale, "Hero");

  const PropsIcon: IconBaseProps = {
    size: 24,
  };
  return (
    <div className="hero min-h-screen min-w-fit bg-base-200 relative z-0 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <NextImage
            src="/images/gabriel-spontoni.jpg"
            alt="Picture of the author"
            className="max-w-sm rounded-lg shadow-2xl filter brightness-75 mt-20 lg:mt-0"
            width={280}
            height={200}
          />
        </div>

        <div className="animate-flip-up">
          <h1 className="text-5xl font-beginner">Gabriel Spontoni</h1>
          <p className="py-6">{t("description")}</p>
          <div>
            <span className="footer-title">{t("footerTitle")}</span>
            <div className="flex gap-4 mt-4">
              <SiHtml5 {...PropsIcon} />
              <SiCss3 {...PropsIcon} />
              <SiJavascript {...PropsIcon} />
              <SiTypescript {...PropsIcon} />
              <SiReact {...PropsIcon} />
              <SiReactquery {...PropsIcon} />
              <SiNextdotjs {...PropsIcon} />
              <SiTailwindcss {...PropsIcon} />
              <SiRedux {...PropsIcon} />
              <SiChakraui {...PropsIcon} />
              <SiMui {...PropsIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
