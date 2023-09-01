"use client";
import { useTranslations } from "next-intl";

export function SidebarList() {
  const t = useTranslations("Tutorials");
  const sidebarItems = [
    {
      title: t("jest.title"),
      url: "/",
      disabled: true,
    },
  ];

  return (
    <ul className="menu p-10 w-80 min-h-full bg-base-200 text-base-content">
      {sidebarItems.map((item, index) => (
        <li key={index} className={`${item.disabled ? "disabled" : ""}`}>
          <a href={item.disabled ? undefined : item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
