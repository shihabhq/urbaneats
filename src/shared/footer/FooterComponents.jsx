import { Link } from "react-router-dom";

const FooterNav = ({ first, second, third, fourth }) => {
  return (
    <nav className="mx-4">
      <h6 className="footer-title">{first}</h6>
      <Link to={'/about'} className="link link-hover">About us</Link>
      <Link to={'/home'} className="link link-hover">Home</Link>
      <Link to={'/gallery'} className="link link-hover">Gallery</Link>
      <Link to={'/all-foods'} className="link link-hover">All Foods</Link>
    </nav>
  );
};

const FooterSocial = ({ children,to }) => {
  return (
    <a href={to} target="_blank"  className="text-base-content cursor-pointer hover:text-btncol hover:-translate-y-1 transition-all duration-200">
      {children}
    </a>
  );
};

export { FooterNav, FooterSocial };
