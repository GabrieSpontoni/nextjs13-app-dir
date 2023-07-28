"use client";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import NextImage from "next/image";

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
      company: "",
      description: "",
      image: "",
      url: "/images/b&t.png",
    },
    {
      company: "",
      description: "",
      image: "",
      url: "/images/cinemark.webp",
    },
    {
      company: "",
      description: "",
      image: "",
      url: "/images/cargo_place.png",
    },
    {
      company: "",
      description: "",
      image: "",
      url: "/images/arco.png",
    },
    {
      company: "",
      description: "",
      image: "",
      url: "/images/marvin.jpg",
    },
    {
      company: "",
      description: "",
      image: "",
      url: "/images/zap.png",
    },
  ];

  return (
    <div className="min-h-screen bg-base-300 pt-12 justify-center text-center">
      <h1
        ref={ref}
        className={`${
          inView && "animate-flip-up"
        } text-5xl font-beginner p-0 text-center`}
      >
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 mt-20 gap-5 max-w-7xl mx-4 lg:mx-auto lg:grid-cols-2">
        {experienceList.map((experience, index) => (
          <div
            key={index}
            className="card lg:card-side bg-base-100 shadow-xl h-56"
          >
            <figure className="card-image lg:pl-4">
              <div className="flex justify-center items-center h-32 w-32 relative">
                <NextImage
                  src={experience.url}
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
                <button className="btn btn-primary">Acessar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
