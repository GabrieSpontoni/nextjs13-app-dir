import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";
import { Links } from "./components/Links/Links";
import { MdMenu } from "react-icons/md";

export function Header() {
  return (
    <div className="flex bg-base-100 fixed z-10 w-full">
      <label
        htmlFor="my-drawer-2"
        className="btn my-2 lg:hidden bg-transparent border-none"
      >
        <MdMenu size={24} />
      </label>
      <div className="navbar px-4 lg:px-10">
        <div className="navbar-start">
          <Links />
        </div>
        <div className="flex-none ml-auto">
          <div className="dropdown dropdown-end">
            <ThemeSwitcher />
          </div>
          <div className="dropdown dropdown-end">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
