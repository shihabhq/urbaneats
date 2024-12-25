import { Link } from "react-router-dom";

const ButtonCovered = ({ name, to, onClick }) => {
  return (
    <Link
      className="block px-6 py-2 border border-btncol font-medium text-white bg-btncol text-lg hover:bg-inherit font-poppins rounded-sm hover:text-btncol transition-all text-center duration-200"
      to={to || "#"}
      onClick={onClick || null}>
      {name}
    </Link>
  );
};

export default ButtonCovered;
