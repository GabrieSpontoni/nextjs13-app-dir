import { BsGithub } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

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
              <a>Dark Mode</a>
            </li>
            <li>
              <a>Light Mode</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
