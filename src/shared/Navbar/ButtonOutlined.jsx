import { Link, NavLink } from "react-router-dom";

const NavbarBtn = ({ name, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `font-Roboto text-lg text-center flex justify-center items-center border-b-2 hover:bg-inherit focus:bg-inherit active:bg-transparent shadow-none border-transparent px-0 py-0 rounded-none duration-200 transition-[border-bottom,color] hover:border-btncol font-medium mx-4 hover:text-btncol ${
          isActive ? "active-nav" : " "
        }`
      }>
      {name}
    </NavLink>
  );
};

export default NavbarBtn;
