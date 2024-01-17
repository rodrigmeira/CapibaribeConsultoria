import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../../Assets/Images/logo.svg";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setShowNav(false);
  };

  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        <Link to="home" smooth={true} duration={500}>
          <a className="navbar__logo" onClick={scrollToTop}>
            <img src={Logo} alt="CapibaribeLogo" />
          </a>
        </Link>

        <ul className={`navbar__links ${showNav ? "show-nav" : ""}`}>
          <li onClick={scrollToTop}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              Serviços
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link to={`risk`} smooth={true} duration={500}>
              Risco e Compliance
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contato
            </Link>
          </li>
        </ul>

        <a
          href="https://api.whatsapp.com/send?phone=5581973400191&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20solicitar%20uma%20consulta!"
          className="button-primary navbar__btn" target="blank"
        >
          Fale Conosco
        </a>

        <div
          className={`navbar__menubar ${showNav ? "bg-color" : ""}`}
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
