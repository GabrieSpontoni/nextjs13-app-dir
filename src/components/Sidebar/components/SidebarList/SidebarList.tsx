"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function SidebarList() {
  const pathname = usePathname();
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
      disabled: true,
    },
  ];

  return (
    <ul className="menu py-10 w-80 min-h-full bg-base-100 text-base-content">
      {sidebarItems.map((item, index) => (
        <li
          key={index}
          className={`${
            item.disabled
              ? "disabled"
              : `${
                  pathname === item.url ? "bg-base-300 rounded-lg" : undefined
                }`
          }`}
        >
          <a href={item.disabled ? undefined : item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
