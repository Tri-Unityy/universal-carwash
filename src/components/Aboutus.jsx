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
              sx={{ color: "#fff" , margin: "10px"}}
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
                        style={{ width: "100%", height: "auto", borderRadius: "15px" }}
                        itemOne={
                          <ReactCompareSliderImage
                            src={before}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={after}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
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
              sx={{ color: "#fff" , margin: "10px"}}
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
                    Bienvenue chez Universal Car Wash, votre destination unique pour 
                    des soins ultimes de véhicules. Profitez d'un service personnalisé 
                    et d'une attention méticuleuse aux détails grâce à nos services 
                    complets de lavage et de nettoyage adaptés à vos besoins. Planifiez 
                    une date avec nous pour dévoiler le plan de soins parfait pour votre véhicule.
                    <a className="aboutus-button" href="#apply">
                      Planifier maintenant
                    </a>
                  </SectionParagraph>
                ) : (
                  <SectionParagraph $mode="aboutus">
                      Welcome to Universal Car Wash, your one-stop destination for 
                      ultimate vehicle care. Enjoy personalized service and meticulous 
                      attention to detail with our comprehensive washing and cleaning 
                      services tailored to your needs. Schedule a date with us to unveil 
                      the perfect care plan for your vehicle.
                      <a className="aboutus-button" href="#apply">
                        Schedule Now
                      </a>
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
