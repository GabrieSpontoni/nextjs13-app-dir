import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";

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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Link href="https://github.com/GabrieSpontoni" target="_blank">
              <BsGithub size={24} />
            </Link>
          </label>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Link
              href="https://www.linkedin.com/in/gabriel-spontoni-4816b519a/"
              target="_blank"
            >
              <BsLinkedin size={24} />
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
