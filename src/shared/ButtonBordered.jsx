import React from "react";
import { Link } from "react-router-dom";

const ButtonBordered = ({ title, to }) => {
  return (
    <Link
      to={to || "#"}
      className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium bg-inherit text-btncol border-btncol transition-all  focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-btncol hover:text-white focus:ring-btncol">
      {title}
    </Link>
  );
};

export default ButtonBordered;
