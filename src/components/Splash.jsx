import React, { useContext } from "react";
import {
  SectionDiv,
  Container,
  SubHeading,
} from "../assets/style/homeElements";
import "./../assets/style/css/splash.css";
import { TranslatorContext } from "../screens/context/TranslatorContext";
import { motion, useTransform, useScroll } from "framer-motion";
import vidBg from "./../assets/video/bgVid.mp4";

import { primaryHeadingColor } from "../assets/resources/colors";

const Splash = () => {
  const { lang } = useContext(TranslatorContext);

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
          <Container $mode="div">
            {lang === "french" ? (
              <>
                <SubHeading>
                  Révélez la Beauté
                  <span
                    style={{
                      color: primaryHeadingColor,
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    Cachée
                  </span>{" "}
                  <br/>
                  <span style={{ fontSize: "16px" }}>
                    <bold>Universal Car Wash</bold>, votre destination unique pour des soins complets de véhicules.
                  </span>
                </SubHeading>
              </>
            ) : (
              <>
                <SubHeading>
                  Reveal the{" "}
                  <span
                    style={{ color: primaryHeadingColor, fontWeight: "bold" }}
                  >
                    Hidden
                  </span>{" "}
                  Beauty
                  <br/>
                  <span style={{ fontSize: "16px" }}>
                    <bold>Universal Car Wash</bold>, your one-stop destination for comprehensive vehicle care.
                  </span>
                </SubHeading>
              </>
            )}
          </Container>
        </Container>
      </SectionDiv>
    </>
  );
};

export default Splash;
