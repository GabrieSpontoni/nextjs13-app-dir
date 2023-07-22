"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
export function ThemeSwitcher() {
  const { setTheme } = useTheme();

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
          <a onClick={() => setTheme("light")}>Light Mode</a>
        </li>
        <li>
          <a onClick={() => setTheme("night")}>Night Mode</a>
        </li>
      </ul>
    </div>
  );
}
