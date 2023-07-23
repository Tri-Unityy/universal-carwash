import React, { useContext } from "react";
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
import { TranslatorContext } from "../screens/context/TranslatorContext";

const SideBar = ({ isOpen, toggle }) => {
  const { lang, setLang } = useContext(TranslatorContext);
  const handleSelect = (e) => {
    setLang(e);
  };
  return (
    <>
      <Container $mode="side" isOpen={isOpen}>
        <MenuIconContainer $mode="side">
          <CloseIcon sx={{ fontSize: 35, color: "#FFF" }} onClick={toggle} />
        </MenuIconContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              { lang == 'french' ? "À propos de nous" : "About Us"}
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              { lang == 'french' ? "Nos services" : "Services"}
            </SidebarLink>
            <SidebarLink to="ourworks" onClick={toggle}>
              { lang == 'french' ? "Galerie" : "Gallery"}
            </SidebarLink>
            <SidebarLink to="contactus" onClick={toggle}>
              { lang == 'french' ? "Contactez-nous" : "Contact Us"}
            </SidebarLink>
            <Dropdown className="translator-container" onSelect={handleSelect}>
              <Dropdown.Toggle
                className="translator-button"
                id="dropdown-basic"
              >
                <TranslateIcon sx={{ fontSize: 20, color: "#FFF" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-menu">
                <Dropdown.Item eventKey="french" onClick={toggle}>
                  <TranslatorButtonIcon src={fr} /> French
                </Dropdown.Item>
                <Dropdown.Item eventKey="en" onClick={toggle}>
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
