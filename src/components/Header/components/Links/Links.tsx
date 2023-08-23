"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Links() {
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
          href={link.href}
          className="btn btn-ghost normal-case text-xl"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
