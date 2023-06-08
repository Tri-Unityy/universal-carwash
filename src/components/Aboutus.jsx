import React from "react";
import { Container, Image } from "../assets/style/homeElements";
import about from "./../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <>
      <Container $mode="about">
        <Image src={about} />
      </Container>
    </>
  );
};

export default AboutUs;
