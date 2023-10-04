"use client";
import { CardWithImageOverlay } from "../../../../../components/CardWithImageOverlay";
import { useTranslations, useLocale } from "next-intl";

interface TutorialsCardsListProps {}

export function TutorialsCardsList({}: TutorialsCardsListProps) {
  const t = useTranslations("Tutorials");
  const locale = useLocale();

  const cards = [
    {
      src: "/nextjs-icon.svg",
      title: t("nextJs.title"),
      alt: t("nextJs.description"),
      description: t("nextJs.description"),
      href: "/tutorials/quick-start",
    },
    {
      src: "/images/i18n.png",
      title: t("i18n.title"),
      alt: t("i18n.description"),
      description: t("i18n.description"),
    },
    {
      src: "/images/jest.png",
      title: t("jest.title"),
      alt: t("jest.description"),
      description: t("jest.description"),
      href: "/tutorials/jest",
    },
    {
      src: "/images/github-actions.png",
      title: t("githubActions.title"),
      alt: t("githubActions.description"),
      description: t("githubActions.description"),
      href: "/tutorials/github-actions",
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
            href={card.href && `/${locale}${card.href}`}
          />
        ))}
      </div>
    </main>
  );
}
