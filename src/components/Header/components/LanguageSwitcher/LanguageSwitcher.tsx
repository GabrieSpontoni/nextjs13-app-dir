"use client";

import { usePathname, useRouter } from "next-intl/client";
import { MdLanguage } from "react-icons/md";
export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(locale: string) {
    router.replace(pathname, { locale: locale });
  }

  return (
    <div>
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <MdLanguage size={24} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute"
      >
        <li>
          <div
            onClick={() => {
              onSelectChange("pt");
            }}
          >
            pt-BR
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              onSelectChange("en");
            }}
          >
            en-US
          </div>
        </li>
      </ul>
    </div>
  );
}
