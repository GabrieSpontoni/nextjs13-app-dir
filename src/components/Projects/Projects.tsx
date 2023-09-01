"use client";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { CardWithOverlay } from "../CardWithImageOverlay";

interface ProjectsProps {}

interface ProjectsList {
  company: string;
  description: string;
  image: string;
  url: string;
}

export function Projects({}: ProjectsProps) {
  const { ref, inView } = useInView({});
  const t = useTranslations("Projects");
  const tCommon = useTranslations("Common");

  const projectsList: ProjectsList[] = [
    {
      company: "B&T",
      description: t("descriptions.B&T"),
      image: "/images/bt.png",
      url: "https://btcambio.com.br/",
    },
    {
      company: tCommon("commingSoon"),
      description: tCommon("commingSoon"),
      image: "",
      url: "",
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
          <CardWithOverlay
            key={index}
            title={project.company}
            description={project.description}
            src={project.image}
            alt={project.company}
            href={project.url}
          />
        ))}
      </div>
    </div>
  );
}
