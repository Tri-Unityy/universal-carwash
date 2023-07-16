import React, { useState, useEffect } from "react";

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
  SliderContainer,
} from "../assets/style/homeElements";

import beforeAfter from "../constants/beforeAfterSlider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import about from "./../assets/images/about.jpg";
import exterior from "./../assets/images/exterior.jpg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const AboutUs = () => {
  const [imageData] = useState(beforeAfter);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = imageData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, imageData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
      // console.log(index);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
          <motion.div
            className="slider-container-about"
            variants={slideIn("left", "tween", 0.0, 1)}
          >
            <ArrowBackIosIcon
              onClick={() => setIndex(index - 1)}
              className="slider-icon"
              sx={{ color: "#fff" }}
            />
            <SectionDiv $mode="slider">
              {imageData.map((item, indexPackage) => {
                const { id, before, after } = item;

                let position = "nextSlide";
                if (indexPackage === index) {
                  position = "activeSlide";
                }
                if (
                  indexPackage === index - 1 ||
                  (index === 0 && indexPackage === imageData.length - 1)
                ) {
                  position = "lastSlide";
                }

                return (
                  <>
                    <SliderContainer key={id} $mode={position}>
                      <ReactCompareSlider
                        style={{ width: "100%", height: "95%" }}
                        itemOne={
                          <ReactCompareSliderImage
                            src={before}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "fill",
                            }}
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={after}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "fill",
                            }}
                          />
                        }
                      />
                    </SliderContainer>
                  </>
                );
              })}
            </SectionDiv>
            <ArrowForwardIosIcon
              onClick={() => setIndex(index + 1)}
              className="slider-icon"
              sx={{ color: "#fff" }}
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
