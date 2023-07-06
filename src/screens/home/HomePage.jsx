import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Splash from "../../components/Splash";
import { Container } from "../../assets/style/layoutElements";
import AboutUs from "../../components/Aboutus";
import Services from "../../components/Services";
import Packages from "../../components/Packages";
import Gallery from "../../components/Gallery";
import ContactUs from "../../components/ContactUs";
import Apply from "../../components/Apply";
import { TranslatorContext } from "../context/TranslatorContext";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("french");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(lang);
  return (
    <>
      <TranslatorContext.Provider value={{ lang, setLang }}>
        <Container $mode="home">
          <NavBar toggle={toggle} />
          <SideBar isOpen={isOpen} toggle={toggle} />
          <Splash />
          <AboutUs />
          <Services />
          <Packages />
          <Gallery />
          <Apply />
          <ContactUs />
        </Container>
      </TranslatorContext.Provider>
    </>
  );
};

export default HomePage;
