import React from "react";
import {
  Container,
  MenuIconContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "../assets/style/homeElements";

import CloseIcon from "@mui/icons-material/Close";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <Container $mode="side" isOpen={isOpen} onClick={toggle}>
        <MenuIconContainer $mode="side">
          <CloseIcon sx={{ fontSize: 35 }} />
        </MenuIconContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About Us
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="works" onClick={toggle}>
              Our Works
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact Us
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </Container>
    </>
  );
};

export default SideBar;
