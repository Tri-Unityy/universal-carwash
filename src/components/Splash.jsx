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

const Splash = () => {
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
        <Container $mode="splash">
          <ContentContainer $mode="outer">
            <ContentContainer $mode="inner">
              <Container $mode="div">
                <SubHeading>Reveal the</SubHeading>
                <Heading>Hidden</Heading>
                <SubHeading>Beauty</SubHeading>
              </Container>
              <ButtonContainer>
                <Button>Get Started</Button>
              </ButtonContainer>
            </ContentContainer>
          </ContentContainer>
        </Container>
      </SectionDiv>
    </>
  );
};

export default Splash;
