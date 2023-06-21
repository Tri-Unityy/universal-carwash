import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import "./../assets/style/css/about_us.css";
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
      <motion.Container
        className="about"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <ImageBackground />
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="about-container"
        >
          <AboutContainer>
            <SectionHeading>About Us</SectionHeading>
            <AboutParagraphContainer>
              <SectionParagraph>
                Lorem ipsum dolor sit amet, enna kodumai sir ithuhuiuh
                consectetur adipiscing elit. Cras congue, erat a aliquam
                dapibus.
              </SectionParagraph>
            </AboutParagraphContainer>
          </AboutContainer>
        </motion.div>
      </motion.Container>
    </>
  );
};

export default AboutUs;
