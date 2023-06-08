import React from "react";
import {
  AboutContainer,
  AboutHeading,
  AboutParagraph,
  AboutParagraphContainer,
  Container,
  ImageBackground,
} from "../assets/style/homeElements";
import about from "./../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <>
      <Container $mode="about">
        <ImageBackground></ImageBackground>
        <AboutContainer>
          <AboutHeading>About Us</AboutHeading>
          <AboutParagraphContainer>
            <AboutParagraph>
              Lorem ipsum dolor sit amet, enna kodumai sir ithuhuiuh consectetur
              adipiscing elit. Cras congue, erat a aliquam dapibus.
            </AboutParagraph>
          </AboutParagraphContainer>
        </AboutContainer>
      </Container>
    </>
  );
};

export default AboutUs;
