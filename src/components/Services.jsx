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

import i1 from "../assets/images/cubeicons/1.png";
import i2 from "../assets/images/cubeicons/2.png";
import i3 from "../assets/images/cubeicons/3.png";
import i4 from "../assets/images/cubeicons/4.png";
import i5 from "../assets/images/cubeicons/5.png";
import i6 from "../assets/images/cubeicons/6.png";

// import service1 from "../assets/images/service1.png";
// import service2 from "../assets/images/service2.png";
// import service3 from "../assets/images/service3.png";

const Services = () => {
  return (
    <motion.section
      id="services"
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
              At Universal Car Wash, we believe in personalised service, and we're here to accommodate your requests.
              <ul>
                <li>Complete washing and cleaning services (interior + exterior)</li>
                <li>Interior detailing to restore freshness and cleanliness</li>
                <li>Flawless exterior shine for a showroom-worthy finish</li>
                <li>Expert scratch repairs</li>
                <li>Personalised treatments based on your specific requests</li>
              </ul>
              We carry out other treatments on your request such as: cleaning of stains on seats, leather treatment, dog hair, etc. 
              In the event of damage noted during cleaning, we decline all responsibility.<br/>
            </motion.p>
          </SectionParagraph>
        </ServicesParagraphContainer>
        {/* <ServicesParagraphContainer>
          <SectionParagraph $mode="services">
            <motion.p variants={fadeIn("", "", 0.1, 1)}>
              <ul>
                <li>Complete washing and cleaning services (interior + exterior)</li>
                <li>Interior detailing to restore freshness and cleanliness</li>
                <li>Flawless exterior shine for a showroom-worthy finish</li>
                <li>Expert scratch repairs</li>
                <li>Personalised treatments based on your specific requests</li>
              </ul>
            </motion.p>
          </SectionParagraph>
        </ServicesParagraphContainer>
        <ServicesParagraphContainer>
          <SectionParagraph $mode="services">
            <motion.p variants={fadeIn("", "", 0.1, 1)}>
              We carry out other treatments on your request such as: cleaning of stains on seats, leather treatment, dog hair, etc. 
              In the event of damage noted during cleaning, we decline all responsibility.<br/>
            </motion.p>
          </SectionParagraph>
        </ServicesParagraphContainer> */}
        <ServicesImageContainer>
          {/* <ServicesImage src={service1} />
          <ServicesImage src={service2} />
          <ServicesImage src={service3} /> */}

          <ServicesImage src={i1} />
          <ServicesImage src={i2} />
          {/* <ServicesImage src={i3} /> */}
          <ServicesImage src={i4} />
          <ServicesImage src={i5} />
          <ServicesImage src={i6} />
        </ServicesImageContainer>
      </ServicesContainer>
    </motion.section>
  );
};

export default Services;
