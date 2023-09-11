"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const t = useTranslations("Header");

  return (
    <div>
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <MdDarkMode size={24} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute"
      >
        <li>
          <div onClick={() => setTheme("light")}>{t("light")}</div>
        </li>
        <li>
          <div onClick={() => setTheme("night")}>{t("dark")}</div>
        </li>
      </ul>
    </div>
  );
}
