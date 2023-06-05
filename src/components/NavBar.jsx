import React from "react";
import {
  Container,
  Links,
  Logo,
  LogoContainer,
  NavLinks,
} from "../assets/style/homeElements";
import logo from "./../assets/images/logo.png";
const NavBar = () => {
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
    </Container>
  );
};

export default NavBar;
