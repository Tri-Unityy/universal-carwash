import React from "react";
import { Container } from "../assets/style/layoutElements";
import HomePage from "../screens/home/HomePage";

const HomeLayout = () => {
  return (
    <Container $mode="main">
      <HomePage />
    </Container>
  );
};

export default HomeLayout;
