import { BsGithub } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <div className="navbar bg-base-100 fixed px-10 z-10">
      <div className="flex-none ml-auto">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BsGithub size={24} />
            </div>
          </label>
        </div>
        <div className="dropdown dropdown-end">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
