import React, { useState, useEffect, useContext } from "react";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import "./../assets/style/css/about_us.css";
import {
  SectionDiv,
  AboutContainer,
  SectionHeading,
  SectionParagraph,
  AboutParagraphContainer,
  SliderContainer,
} from "../assets/style/homeElements";
import { TranslatorContext } from "../screens/context/TranslatorContext";
import beforeAfter from "../constants/beforeAfterSlider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const AboutUs = () => {
  const [imageData] = useState(beforeAfter);
  const [index, setIndex] = useState(0);
  const { lang } = useContext(TranslatorContext);
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
    }, 10000);
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
              <SectionHeading>
                {lang === "french" ? " À propos de nous" : "About Us"}
              </SectionHeading>
              <AboutParagraphContainer>
                {lang === "french" ? (
                  <SectionParagraph $mode="aboutus">
                    Avec une passion pour la perfection, Universal Car Wash
                    offre des services complets de lavage et de nettoyage qui
                    répondent à tous vos besoins.
                  </SectionParagraph>
                ) : (
                  <SectionParagraph $mode="aboutus">
                    With a passion for perfection, Universal Car Wash offers
                    comprehensive washing and cleaning services that cater to
                    your every need.
                  </SectionParagraph>
                )}
              </AboutParagraphContainer>
            </AboutContainer>
          </motion.div>
        </motion.section>
      </SectionDiv>
    </>
  );
};

export default AboutUs;
