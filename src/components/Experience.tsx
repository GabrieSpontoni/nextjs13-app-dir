"use client";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import Link from "next/link";

interface ExperienceProps {}

interface ExperienceList {
  company: string;
  description: string;
  image: string;
  url: string;
}

export function Experience({}: ExperienceProps) {
  const { ref, inView } = useInView({});
  const t = useTranslations("Experience");

  const experienceList: ExperienceList[] = [
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
    <div className="min-h-screen bg-base-300 pt-12 justify-center text-center mb-4">
      <h1
        ref={ref}
        className={`${inView && "animate-flip-up"} text-5xl p-0 text-center`}
      >
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 mt-20 gap-5 max-w-7xl mx-4 lg:mx-auto lg:grid-cols-2">
        {experienceList.map((experience, index) => (
          <div className="card shadow-xl image-full z-0" key={index}>
            <figure>
              <div className="flex justify-center items-center h-full w-full relative">
                <NextImage
                  src={experience.image}
                  alt={experience.company}
                  fill
                  style={{
                    objectFit: "scale-down",
                  }}
                  quality={100}
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{experience.company}</h2>
              <p>{experience.description}</p>
              <div className="card-actions justify-end">
                <Link href={experience.url} target="_blank">
                  <button className="btn btn-primary">Acessar</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
