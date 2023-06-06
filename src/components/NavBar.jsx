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
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <Container $mode="nav">
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <NavLinks>
        <Links href="#">About Us</Links>
        <Links href="#">Services</Links>
        <Links href="#">Our Works</Links>
        <Links href="#">Contact Us</Links>
      </NavLinks>

      {menu ? (
        <MenuIconContainer onClick={showMenu}>
          <CloseIcon sx={{ fontSize: 35 }} />
        </MenuIconContainer>
      ) : (
        <MenuIconContainer onClick={showMenu}>
          <MenuIcon sx={{ fontSize: 35 }} />
        </MenuIconContainer>
      )}
    </Container>
  );
};

export default NavBar;
