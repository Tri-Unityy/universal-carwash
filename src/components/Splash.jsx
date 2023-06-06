import React from "react";
import { Container, ContentContainer } from "../assets/style/homeElements";

const Splash = () => {
  return (
    <>
      <Container $mode="splash">
        <ContentContainer $mode="outer">
          <ContentContainer $mode="inner">
            <h1>
              Hi, I'm <span>Shawn</span>
            </h1>
            <h1>Hi, I'm</h1>
          </ContentContainer>
        </ContentContainer>
        <ContentContainer $mode="outer">
          <ContentContainer $mode="inner">
            <h1>
              Hi, I'm <span>Shawn</span>
            </h1>
            <h1>Hi, I'm</h1>
          </ContentContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Splash;
