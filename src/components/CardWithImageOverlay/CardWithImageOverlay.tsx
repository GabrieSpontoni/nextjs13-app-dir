"use client";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import Link from "next/link";
import { RenderCondition } from "@/utils/RenderCondition";

interface CardWithOverlayProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  isTargetBlank?: boolean;
}

export function CardWithOverlay({
  src,
  alt,
  title,
  description,
  href,
  isTargetBlank,
}: CardWithOverlayProps) {
  const t = useTranslations("Common");

  return (
    <div className="card shadow-xl image-full z-0">
      <figure>
        <div className="flex justify-center items-center h-full w-full relative">
          <RenderCondition condition={!!src}>
            <NextImage
              src={src}
              alt={alt}
              fill
              style={{
                objectFit: "scale-down",
              }}
              quality={100}
            />
          </RenderCondition>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" disabled={!href}>
            <Link href={href || ""} target={isTargetBlank ? "_blank" : "_self"}>
              {href ? t("access") : t("commingSoon")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
