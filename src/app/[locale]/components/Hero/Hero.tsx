import { ParamsLocaleModel } from "@/types/paramsLocale";
import { getTranslator } from "next-intl/server";
import NextImage from "next/image";
import Link from "next/link";
import { IconBaseProps } from "react-icons/lib";
import {
  SiChakraui,
  SiCss3,
  SiGit,
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
    <div className="hero min-h-screen bg-base-200 relative z-0">
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
          <div className="flex justify-center lg:justify-start">
            <h1 className="text-5xl font-beginner">Gabriel Spontoni</h1>
          </div>
          <p className="py-6">{t("description")}</p>
          <div className="mb-4">
            <span className="footer-title">{t("developer")}</span>
            <div className="mt-4 w-36 bg-black pt-1 mx-auto lg:mx-0">
              <Link href="https://mblabs.com.br/" target="_blank">
                <NextImage
                  src="/images/logo-mb-labs.png"
                  alt="Logo MBLabs"
                  width={138}
                  height={34}
                />
              </Link>
            </div>
          </div>
          <div>
            <span className="footer-title">{t("footerTitle")}</span>
            <div className="grid grid-cols-3 gap-4 mt-4 w-full sm:flex">
              <div className="flex justify-center items-center">
                <SiHtml5 {...PropsIcon} />
              </div>
              <div className="flex justify-center items-center">
                <SiCss3 {...PropsIcon} />
              </div>

              <div className="flex justify-center items-center">
                <SiJavascript {...PropsIcon} />
              </div>

              <div className="flex justify-center items-center">
                <SiTypescript {...PropsIcon} />
              </div>

              <div className="flex justify-center items-center">
                <SiReact {...PropsIcon} />
              </div>

              <div className="flex justify-center items-center">
                <SiReactquery {...PropsIcon} />
              </div>

              <div className="flex justify-center items-center">
                <SiNextdotjs {...PropsIcon} />
              </div>
              <div className="flex justify-center items-center">
                <SiTailwindcss {...PropsIcon} />
              </div>
              <div className="flex justify-center items-center">
                <SiRedux {...PropsIcon} />
              </div>
              <div className="flex justify-center items-center">
                <SiChakraui {...PropsIcon} />
              </div>
              <div className="flex justify-center items-center">
                <SiMui {...PropsIcon} />
              </div>
              <div className="flex justify-center items-center">
                <SiGit {...PropsIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
