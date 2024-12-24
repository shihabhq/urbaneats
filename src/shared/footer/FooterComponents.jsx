const FooterNav = ({ first, second, third, fourth }) => {
  return (
    <nav className="mx-4">
      <h6 className="footer-title">{first}</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
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
