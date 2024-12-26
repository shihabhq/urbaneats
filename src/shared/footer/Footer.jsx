import darkLogo from "../../assets/LogoDark.svg";
import lightLogo from "../../assets/LogoLight.svg";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";
import { FooterNav, FooterSocial } from "./FooterComponents";
import { FaF } from "react-icons/fa6";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className=" relative bg-base-200 text-base-content">
      {/* Curved top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-base-100"></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="footer bg-base-200 text-base-content p-10 pt-20">
        <aside>
          <img
            className="w-[80%]"
            src={theme === "night" ? lightLogo : darkLogo}
            alt=""
          />
          <p>
            UrbanEats foods LTD.
            <br />
            123 street lane, luisiana costaco
          </p>
        </aside>
        <nav className="mx-4">
          <h6 className="footer-title">Our Items</h6>
          <a className="link link-hover text-base">Indians</a>
          <a className="link link-hover text-base">Populars</a>
          <a className="link link-hover text-base">Italians</a>
          <a className="link link-hover text-base">Mexicans</a>
        </nav>
        <FooterNav
          first="company"
          second="About us"
          third="Contact"
          fourth="Jobs"
        />
        <FooterNav
          first="Legal"
          second="Terms of use"
          third="Privacy policy"
          fourth="Cookie policy"
        />
      </div>

      {/* Social links */}
      <div className="flex justify-center space-x-3  mobile:space-x-6  py-4 bg-base-200">
        <FooterSocial to={"https://www.facebook.com"}>
          <FaFacebook size={32}  />
        </FooterSocial>
        <FooterSocial to={"https://www.twitter.com"}>
          <FaTwitter size={32}  />
        </FooterSocial>
        <FooterSocial to={"https://www.instagram.com"}>
          <FaInstagram size={32}  />
        </FooterSocial>
        <FooterSocial to={"https://www.linkedin.com"}>
          <FaLinkedin size={32} />
        </FooterSocial>
      </div>

      {/* Copyright statement */}
      <div className="text-center py-4 bg-base-300">
        <p>© 2024 UrbanEats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
