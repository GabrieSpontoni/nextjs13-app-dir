"use client";
import { CardWithImageOverlay } from "../../../../../components/CardWithImageOverlay";
import { useTranslations, useLocale } from "next-intl";

interface TutorialsCardsListProps {}

export function TutorialsCardsList({}: TutorialsCardsListProps) {
  const t = useTranslations("Tutorials");
  const locale = useLocale();

  const cards = [
    {
      src: "/images/jest.png",
      title: t("jest.title"),
      alt: t("jest.description"),
      description: t("jest.description"),
      href: "/tutorials/jest",
    },
  ];

  return (
    <main className="m-4">
      <div className="grid grid-cols-1 mt-10 gap-5 lg:grid-cols-3">
        {cards.map((card, index) => (
          <CardWithImageOverlay
            key={index}
            src={card.src}
            title={card.title}
            alt={card.alt}
            description={card.description}
            href={`/${locale}${card.href}`}
          />
        ))}
      </div>
    </main>
  );
}
