import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";
import { Links } from "./components/Links/Links";

export function Header() {
  return (
    <div className="navbar bg-base-100 fixed px-10 z-10">
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
  );
}
