import React from "react";
import { motion } from "framer-motion";
import "./../assets/style/css/services.css";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/motion";
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
    <motion.section
      className="services"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <ServicesContainer>
        <motion.div variants={textVariant()}>
          <SectionHeading>Services</SectionHeading>
        </motion.div>
        <ServicesParagraphContainer>
          <SectionParagraph $mode="services">
            <motion.p variants={fadeIn("", "", 0.1, 1)}>
              Unmatched Excellence: Discover Our Supreme Services.
            </motion.p>
          </SectionParagraph>
        </ServicesParagraphContainer>
        <ServicesImageContainer>
          <ServicesImage src={service1} />
          <ServicesImage src={service2} />
          <ServicesImage src={service3} />
        </ServicesImageContainer>
      </ServicesContainer>
    </motion.section>
  );
};

export default Services;
