import React from "react";
import {
  AboutContainer,
  SectionHeading,
  SectionParagraph,
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
          <SectionHeading>About Us</SectionHeading>
          <AboutParagraphContainer>
            <SectionParagraph>
              Lorem ipsum dolor sit amet, enna kodumai sir ithuhuiuh consectetur
              adipiscing elit. Cras congue, erat a aliquam dapibus.
            </SectionParagraph>
          </AboutParagraphContainer>
        </AboutContainer>
      </Container>
    </>
  );
};

export default AboutUs;