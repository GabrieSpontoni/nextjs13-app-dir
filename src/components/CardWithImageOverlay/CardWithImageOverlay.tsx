"use client";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import Link from "next/link";
import { RenderCondition } from "@/utils/RenderCondition";

interface CardWithImageOverlayProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  isTargetBlank?: boolean;
}

export function CardWithImageOverlay({
  src,
  alt,
  title,
  description,
  href,
  isTargetBlank,
}: CardWithImageOverlayProps) {
  const t = useTranslations("Common");

  return (
    <div
      className="card shadow-xl image-full z-0"
      data-testid="card-with-image-overlay"
    >
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
          <button
            className="btn btn-primary disabled:text-gray-300"
            disabled={!href}
          >
            <Link
              href={href || "/"}
              target={isTargetBlank ? "_blank" : "_self"}
            >
              {href ? t("access") : t("commingSoon")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
