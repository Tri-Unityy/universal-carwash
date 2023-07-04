import React, { useState, useEffect } from "react";
import {
  Container,
  Links,
  Logo,
  LogoContainer,
  MenuIconContainer,
  NavLinks,
  TranslatorButtonIcon,
} from "../assets/style/homeElements";

import "./../assets/style/css/slider.css";

import Dropdown from "react-bootstrap/Dropdown";
import TranslateIcon from "@mui/icons-material/Translate";
///assets import///
import eng from "./../assets/images/eng.png";
import fr from "./../assets/images/french.png";
import logo from "./../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { animateScroll as scroll } from "react-scroll";
const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Container $mode="nav">
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <NavLinks>
        <Links
          to="aboutus"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          About Us
        </Links>
        <Links
          to="services"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Services
        </Links>
        <Links
          to="ourworks"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Our Works
        </Links>
        <Links
          to="contactus"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Contact Us
        </Links>
      </NavLinks>

      <Dropdown>
        <Dropdown.Toggle className="translator-button" id="dropdown-basic">
          <TranslateIcon sx={{ fontSize: 20, color: "#FFF" }} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item>
            <TranslatorButtonIcon src={fr} /> French
          </Dropdown.Item>
          <Dropdown.Item>
            <TranslatorButtonIcon src={eng} /> English
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <MenuIconContainer $mode="nav" onClick={toggle}>
        <MenuIcon sx={{ fontSize: 35, color: "#FFF" }} />
      </MenuIconContainer>
    </Container>
  );
};

export default NavBar;
