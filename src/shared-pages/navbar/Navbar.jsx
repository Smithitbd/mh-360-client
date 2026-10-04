import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdArrowDropdownCircle className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-3">
        {/* Theme Toggle */}
        <label className="flex cursor-pointer gap-2 items-center">
          {/* Sun icon */}
          <MdSunny />
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
          {/* Moon icon */}
          <IoMoon />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
