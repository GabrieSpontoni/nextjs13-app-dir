"use client";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import Link from "next/link";
import { RenderCondition } from "@/utils/RenderCondition";

interface ProjectsProps {}

interface ProjectsList {
  company: string;
  description: string;
  image: string;
  url: string;
  isComingSoon?: boolean;
}

export function Projects({}: ProjectsProps) {
  const { ref, inView } = useInView({});
  const t = useTranslations("Projects");

  const projectsList: ProjectsList[] = [
    {
      company: "B&T",
      description: t("descriptions.B&T"),
      image: "/images/bt.png",
      url: "https://btcambio.com.br/",
    },
    {
      company: "Cinemark",
      description: t("descriptions.Cinemark"),
      image: "/images/cinemark.png",
      url: "",
      isComingSoon: true,
    },
    {
      company: "Cargo Place",
      description: t("descriptions.CargoPlace"),
      image: "/images/cargo_place_logo.png",
      url: "https://cargoplace.com/",
    },
    {
      company: "Arco",
      description: t("descriptions.Arco"),
      image: "/images/arcooo.png",
      url: "https://arcoeducacao.com.br/",
    },
    {
      company: "Marvin",
      description: t("descriptions.Marvin"),
      image: "/images/marvin-removebg-preview.png",
      url: "https://omarvin.com.br/login",
    },
    {
      company: "Zap Delivery",
      description: t("descriptions.Zap"),
      image: "/images/zapp.png",
      url: "https://zapdelivery.me/",
    },
  ];

  return (
    <div className="min-h-screen bg-base-300 justify-center text-center py-12">
      <h1 className="text-5xl p-0 text-center">{t("title")}</h1>
      <div
        className={`grid grid-cols-1 mt-10 gap-5 max-w-7xl mx-4 lg:mx-auto lg:grid-cols-2 ${
          inView && "animate-fade-left animate-duration-[1000ms]"
        }`}
        ref={ref}
      >
        {projectsList.map((project, index) => (
          <div className="card shadow-xl image-full z-0" key={index}>
            <figure>
              <div className="flex justify-center items-center h-full w-full relative">
                <RenderCondition condition={!project.isComingSoon}>
                  <NextImage
                    src={project.image}
                    alt={project.company}
                    fill
                    style={{
                      objectFit: "scale-down",
                    }}
                    quality={100}
                  />
                </RenderCondition>
              </div>
            </figure>
            <div className={`card-body ${!inView && "hidden"}`}>
              <h2 className="card-title">
                {project.isComingSoon ? t("commingSoon") : project.company}
              </h2>
              <p className="text-justify">
                {project.isComingSoon ? t("commingSoon") : project.description}
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={project.isComingSoon}
                >
                  <Link href={project.url} target="_blank">
                    {!project.isComingSoon ? t("access") : t("commingSoon")}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
