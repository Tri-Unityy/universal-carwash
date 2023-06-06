import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Splash from "../../components/Splash";
import { Container } from "../../assets/style/layoutElements";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Container $mode="home">
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Splash />
      </Container>
    </>
  );
};

export default Home;
