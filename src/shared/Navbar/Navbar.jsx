import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import darkLogo from "../../assets/LogoDark.svg";
import lightLogo from "../../assets/LogoLight.svg";
import NavbarBtn from "./ButtonOutlined";
import ThemeToggle from "./ThemeToggler";
import ButtonCovered from "../ButtonCovered";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container mx-auto px-4 mobile:px-12 sticky left-0 bg-base-100 z-500 rounded-full w-full top-4 shadow-md">
      <div className="navbar bg-base-100">
        {/* Navbar Start */}
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-center dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow">
              <li className="py-2">
                <NavbarBtn name={"Home"} link="/" />
              </li>
              <li className="py-2">
                <NavbarBtn name={"All Foods"} link="/all-foods" />
              </li>
              <li className="py-2">
                <NavbarBtn name={"Gallery"} link="/gallery" />
              </li>
              <li className="py-2 sm:hidden">
                <ButtonCovered name='Login' to='/login'  />
              </li>
            </ul>
          </div>
          <Link className="cursor-pointer" to="/">
            <img
              src={theme === "light" ? darkLogo : lightLogo}
              alt="UrbanEats Logo"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavbarBtn name={"Home"} link="/" />
            </li>
            <li>
              <NavbarBtn name={"All Foods"} link="/all-foods" />
            </li>
            <li>
              <NavbarBtn name={"Gallery"} link="/gallery" />
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-4">
          <div className="hidden sm:flex items-center">
          <ButtonCovered name='Login' to='/login' />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
