import React from "react";
import { Container } from "../assets/style/layoutElements";
import Home from "../screens/home/Home";

const HomeLayout = () => {
  return (
    <Container $mode="main">
      <Home />
    </Container>
  );
};

export default HomeLayout;
