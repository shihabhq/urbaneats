import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import darkLogo from "../../assets/LogoDark.svg";
import lightLogo from "../../assets/LogoLight.svg";
import NavbarBtn from "./ButtonOutlined";
import ThemeToggle from "./ThemeToggler";
import ButtonCovered from "../ButtonCovered";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { use } from "react";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [firstChar, setFirstChar] = useState(
    user?.email.charAt(0).toUpperCase() || ""
  );


  useEffect(() => {
    if (user) {
      setPhotoURL(user.photoURL);
      setFirstChar(user.email.charAt(0).toUpperCase());
    }
  }, [user]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch(() => {
        toast.error("Failed to log out. We are working on it");
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto px-4 mobile:px-12 fixed left-0 right-0 top-4 bg-base-100 z-50 rounded-full shadow-md">
      <div className="navbar rounded-full bg-base-100">
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
                <NavbarBtn name={"About Us"} link="/about" />
              </li>
              <li className="py-2">
                <NavbarBtn name={"All Foods"} link="/all-foods" />
              </li>
              <li className="py-2">
                <NavbarBtn name={"Gallery"} link="/gallery" />
              </li>
              <div className="py-2 sm:hidden">
                {user ? (
                  <div className="flex items-center gap-4">
                    <div className="dropdown">
                      <div
                        tabIndex={2}
                        role="button"
                        className="cursor-pointer"
                        onClick={toggleDropdown}>
                        {user?.photoURL === null ? (
                          <p className="w-10 h-10 bg-red-500 text-xl">
                            {firstChar}
                          </p>
                        ) : (
                          <img
                            className="w-10 rounded-full"
                            src={photoURL}
                            alt=""
                          />
                        )}
                      </div>
                      {isDropdownOpen && (
                        <ul className="menu menu-sm text-center dropdown-content -translate-x-16 bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow">
                          <li className="py-2">
                            <NavbarBtn name={"My Foods"} link="/my-foods" />
                          </li>
                          <li className="py-2">
                            <NavbarBtn name={"Add Food"} link="/add-food" />
                          </li>
                          <li className="py-2">
                            <NavbarBtn name={"My Orders"} link="/my-orders" />
                          </li>
                        </ul>
                      )}
                    </div>
                    <ButtonCovered name="Logout" onClick={handleSignOut} />
                  </div>
                ) : (
                  <ButtonCovered name="Login" to="/login" />
                )}
              </div>
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
              <NavbarBtn name={"About Us"} link="/about" />
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
            {user ? (
              <div className="flex items-center gap-4">
                <div className="dropdown">
                  <div
                    tabIndex={1}
                    role="button"
                    className="cursor-pointer"
                    onClick={toggleDropdown}>
                    <img
                      className="w-10 rounded-full h-10 border"
                      src={photoURL}
                      alt=""
                    />
                  </div>
                  {isDropdownOpen && (
                    <ul className="menu menu-sm text-center dropdown-content -translate-x-16 bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow">
                      <li className="py-2">
                        <NavbarBtn name={"My Foods"} link="/my-foods" />
                      </li>
                      <li className="py-2">
                        <NavbarBtn name={"Add Food"} link="/add-food" />
                      </li>
                      <li className="py-2">
                        <NavbarBtn name={"My Orders"} link="/my-orders" />
                      </li>
                    </ul>
                  )}
                </div>
                <ButtonCovered name="Logout" onClick={handleSignOut} />
              </div>
            ) : (
              <ButtonCovered name="Login" to="/login" />
            )}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
