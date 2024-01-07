import React from "react";
import { Container } from "../assets/style/layoutElements";
import Services from "../screens/service/Services";
import ServicePage from "../screens/service/ServicePage";

const ServicesLayout = () => {
  return (
    <Container $mode="main">
      {/* <Services /> */}
      <ServicePage />
    </Container>
  );
};

export default ServicesLayout;
