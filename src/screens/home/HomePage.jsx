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
import {
  ServiceContext,
  TranslatorContext,
} from "../context/TranslatorContext";
import Cards from "../../components/Cards";
import Notice from "../../components/Notice";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("french");
  const [service, setService] = useState(1);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(lang);
  return (
    <>
      <TranslatorContext.Provider value={{ lang, setLang }}>
        <ServiceContext.Provider value={{ service, setService }}>
          <Container $mode="home">
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Notice />
            <Splash />
            <AboutUs />
            <Services />
            <Cards />
            {/* <Packages /> */}

            <Gallery />
            <Apply />
            <ContactUs />
          </Container>
        </ServiceContext.Provider>
      </TranslatorContext.Provider>
    </>
  );
};

export default HomePage;
