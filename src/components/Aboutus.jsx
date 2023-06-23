import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import "./../assets/style/css/about_us.css";
import {
  SectionDiv,
  Container,
  AboutContainer,
  SectionHeading,
  SectionParagraph,
  AboutParagraphContainer,
} from "../assets/style/homeElements";

const AboutUs = () => {
  return (
    <>
      <SectionDiv $mode="about">
        <motion.section
          className="about"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.img
            className="about-image"
            variants={slideIn("left", "tween", 0.2, 1)}
          />

          <motion.div variants={textVariant()} className="about-container">
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
        </motion.section>
      </SectionDiv>
    </>
  );
};

export default AboutUs;
