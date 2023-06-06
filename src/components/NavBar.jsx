import React, { useState } from "react";
import {
  Container,
  Links,
  Logo,
  LogoContainer,
  MenuIconContainer,
  NavLinks,
} from "../assets/style/homeElements";

///assets import///
import logo from "./../assets/images/logo.png";
import SegmentIcon from "@mui/icons-material/Segment";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = ({ toggle }) => {
  return (
    <Container $mode="nav">
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <NavLinks>
        <Links
          to=""
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          About Us
        </Links>
        <Links
          to=""
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Services
        </Links>
        <Links
          to=""
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Our Works
        </Links>
        <Links
          to=""
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Contact Us
        </Links>
      </NavLinks>

      <MenuIconContainer $mode="nav" onClick={toggle}>
        <MenuIcon sx={{ fontSize: 35 }} />
      </MenuIconContainer>
    </Container>
  );
};

export default NavBar;
