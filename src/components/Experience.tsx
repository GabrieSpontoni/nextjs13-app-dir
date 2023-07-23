"use client";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

interface ExperienceProps {}

export function Experience({}: ExperienceProps) {
  const { ref, inView } = useInView({});
  const t = useTranslations("Experience");

  return (
    <div className="hero min-h-screen bg-base-300 pt-12">
      <div ref={ref} className={`${inView && "animate-flip-up"}`}>
        <h1 className="text-5xl font-beginner">
          {t("title")} (Em Breve | Comming Soon)
        </h1>
      </div>
    </div>
  );
}
