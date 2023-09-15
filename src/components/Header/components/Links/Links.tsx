"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function Links() {
  const locale = useLocale();
  const t = useTranslations("Header");
  const Links = [
    { href: "/", label: t("home") },
    { href: "/tutorials", label: t("tutorials") },
  ];

  return (
    <>
      {Links.map((link, index) => (
        <Link
          key={index}
          href={`/${locale}${link.href}`}
          className="btn btn-ghost normal-case text-xl"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
