import React from "react";
import {
  Container,
  SectionHeading,
  SectionParagraph,
  ServicesParagraphContainer,
  ServicesImageContainer,
  ServicesImage,
  ServicesContainer,
} from "../assets/style/homeElements";

import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";

const Services = () => {
  return (
    <Container $mode="services">
      <ServicesContainer>
        <SectionHeading>Services</SectionHeading>
        <ServicesParagraphContainer>
          <SectionParagraph $mode="services">
            Unmatched Excellence: Discover Our Supreme Services.
          </SectionParagraph>
        </ServicesParagraphContainer>
        <ServicesImageContainer>
          <ServicesImage src={service1} />
          <ServicesImage src={service2} />
          <ServicesImage src={service3} />
        </ServicesImageContainer>
      </ServicesContainer>
    </Container>
  );
};

export default Services;
