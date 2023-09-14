"use client";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next-intl/client";

export function SidebarList() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Tutorials");
  const sidebarItems = [
    {
      title: t("jest.title"),
      url: "/tutorials/jest",
      disabled: false,
    },
    {
      title: t("githubActions.title"),
      url: "/tutorials/github-actions",
      disabled: false,
    },
    {
      title: t("tailwindcss.title"),
      url: "/tutorials/...",
      disabled: true,
    },
  ];

  return (
    <ul className="menu py-10 w-80 min-h-full bg-base-100 text-base-content">
      {sidebarItems.map((item, index) => (
        <li key={index} className={`${item.disabled ? "disabled" : "active"}`}>
          <a
            className={`${pathname === item.url ? "active" : "disabled"}`}
            href={item.disabled ? undefined : `/${locale}${item.url}`}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
