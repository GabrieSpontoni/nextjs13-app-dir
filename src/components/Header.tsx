import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  return (
    <div className="navbar bg-base-100 fixed px-10 z-10">
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
