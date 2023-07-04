import React from "react";
import {
  Container,
  MenuIconContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  TranslatorButtonIcon,
} from "../assets/style/homeElements";
import "./../assets/style/css/slider.css";
import Dropdown from "react-bootstrap/Dropdown";
import TranslateIcon from "@mui/icons-material/Translate";
import CloseIcon from "@mui/icons-material/Close";
import eng from "./../assets/images/eng.png";
import fr from "./../assets/images/french.png";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <Container $mode="side" isOpen={isOpen}>
        <MenuIconContainer $mode="side">
          <CloseIcon sx={{ fontSize: 35, color: "#FFF" }} onClick={toggle} />
        </MenuIconContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About Us
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="ourworks" onClick={toggle}>
              Our Works
            </SidebarLink>
            <SidebarLink to="contactus" onClick={toggle}>
              Contact Us
            </SidebarLink>
            <Dropdown>
              <Dropdown.Toggle className="translator-button">
                <TranslateIcon sx={{ fontSize: 20, color: "#FFF" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-menu">
                <Dropdown.Item onClick={toggle}>
                  <TranslatorButtonIcon src={fr} /> French
                </Dropdown.Item>
                <Dropdown.Item onClick={toggle}>
                  <TranslatorButtonIcon src={eng} /> English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </SidebarMenu>
        </SidebarWrapper>
      </Container>
    </>
  );
};

export default SideBar;
