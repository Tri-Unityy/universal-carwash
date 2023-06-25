import React from "react";
import {
  SectionDiv,
  Container,
  ContentContainer,
  // ImageContainer,
  SubHeading,
  Heading,
  ButtonContainer,
  Button,
} from "../assets/style/homeElements";
import "./../assets/style/css/splash.css";

import { motion, useTransform, useScroll } from "framer-motion";
import splash from "./../assets/images/splash.jpg";
import vidBg from "./../assets/video/bgVid.mp4";
import "./../assets/style/css/cube.scss";

import { useNavigate } from "react-router-dom";

import i1 from "./../assets/images/cubeicons/1.png";
import i2 from "./../assets/images/cubeicons/2.png";
import i3 from "./../assets/images/cubeicons/3.png";
import i4 from "./../assets/images/cubeicons/4.png";
import i5 from "./../assets/images/cubeicons/5.png";
import i6 from "./../assets/images/cubeicons/6.png";
import SplashImageSlider from "./SplashImageSlider";

const Splash = () => {
  const navigate = useNavigate();
  let { scrollYProgress } = useScroll();
  let yRange = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <>
      <SectionDiv>
        <motion.div style={{ yRange }} className="splashbg">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: 0.5 }}
            className="bg-video"
          >
            <source src={vidBg} type="video/mp4" />
          </video>
        </motion.div>
        <div className="cube">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <div>
                  <img src={i1} height="100px" width="100px" />
                </div>
              </div>
              <div className="face2">
                <div>
                  <img src={i2} height="100px" width="100px" />
                </div>
              </div>
              <div className="face3">
                <div>
                  <img src={i3} height="100px" width="100px" />
                </div>
              </div>
              <div className="face4">
                <div>
                  <img src={i4} height="100px" width="100px" />
                </div>
              </div>
              <div className="face5">
                <div>
                  <img src={i5} height="100px" width="100px" />
                </div>
              </div>
              <div className="face6">
                <div>
                  <img src={i6} height="100px" width="100px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container $mode="splash">
          <ContentContainer $mode="outer">
            <ContentContainer $mode="inner">
              <Container $mode="div">
                <SubHeading>Reveal the</SubHeading>
                <Heading>Hidden</Heading>
                <SubHeading>Beauty</SubHeading>
              </Container>
              {/* <ButtonContainer>
                <Button onClick={() => navigate("/booking")}>
                  Get Started
                </Button>
              </ButtonContainer> */}
            </ContentContainer>
          </ContentContainer>
          {/* <SplashImageSlider /> */}
        </Container>
      </SectionDiv>
    </>
  );
};

export default Splash;
