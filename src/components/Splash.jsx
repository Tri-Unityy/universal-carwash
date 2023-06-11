import React from "react";
import {
  Container,
  ContentContainer,
  ImageContainer,
  SubHeading,
  Heading,
  ButtonContainer,
  Button,
} from "../assets/style/homeElements";

import splash from "./../assets/images/splash.jpg";

const Splash = () => {
  return (
    <>
      <Container $mode="splash">
        <ContentContainer $mode="outer">
          <ContentContainer $mode="inner">
            <Container $mode="div">
              <SubHeading>Reveal the</SubHeading>
              <Heading>Hidden</Heading>
              <SubHeading>Beauty</SubHeading>
            </Container>
            <ButtonContainer>
              <Button>Get Started</Button>
            </ButtonContainer>
          </ContentContainer>
        </ContentContainer>
        <ImageContainer>{/* <Image src={splash} /> */}</ImageContainer>
      </Container>
    </>
  );
};

export default Splash;
