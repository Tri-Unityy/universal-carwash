import React from "react";
import {
  Container,
  SectionHeading,
  SectionParagraph,
  ServicesParagraphContainer,
} from "../assets/style/homeElements";

const Services = () => {
  return (
    <Container $mode="services">
      <SectionHeading>Services</SectionHeading>
      <ServicesParagraphContainer>
        <SectionParagraph>
          Unmatched Excellence: Discover Our Supreme Services
        </SectionParagraph>
      </ServicesParagraphContainer>
    </Container>
  );
};

export default Services;
