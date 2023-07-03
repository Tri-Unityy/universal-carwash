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
import about from "./../assets/images/about.jpg";
import exterior from "./../assets/images/exterior.jpg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const AboutUs = () => {
  return (
    <>
      <SectionDiv $mode="about" id="aboutus">
        <motion.section
          className="about"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={slideIn("left", "tween", 0.0, 1)}>
            <ReactCompareSlider
              style={{ width: "100%", height: "70%" }}
              itemOne={
                <ReactCompareSliderImage
                  src={about}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={exterior}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              }
            />
          </motion.div>
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
