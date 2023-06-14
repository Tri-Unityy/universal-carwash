import React, { useState, useEffect } from "react";
import {
  Container,
  SliderImageContainer,
  SliderContentContainer,
  SliderImage,
  SliderContentInnerContainer,
  SliderHeading,
  SliderText,
  CommonDiv,
  ButtonContainer,
  Button,
  SliderContainer,
} from "../assets/style/homeElements";

import packages from "../constants";

import exterior from "../assets/images/exterior.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import { primaryHeadingColor, successColor } from "../assets/resources/colors";

const Slider = () => {
  const [packageData] = useState(packages);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = packageData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, packageData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      {packageData.map((item, indexPackage) => {
        const {
          packageId,
          packageType,
          packagePrice,
          packageDuration,
          packageItems,
        } = item;

        let position = "nextSlide";
        if (indexPackage === index) {
          position = "activeSlide";
        }
        if (
          indexPackage === index - 1 ||
          (index === 0 && indexPackage === packageData.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <>
            <SliderContainer key={packageId} $mode={position}>
              <Container $mode="slider">
                <SliderImageContainer>
                  <SliderImage src={exterior} />
                </SliderImageContainer>
                <SliderContentContainer>
                  <SliderContentInnerContainer>
                    <SliderHeading> Exterior Cleaning </SliderHeading>
                    <SliderText $mode="dark">
                      <AccessTimeIcon sx={{ color: primaryHeadingColor }} /> 30
                      min{" "}
                    </SliderText>
                    <SliderText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam
                    </SliderText>
                    <CommonDiv>
                      <SliderText $mode="list">
                        <DoneIcon sx={{ color: successColor }} /> Lorem Ipsum{" "}
                      </SliderText>
                      <SliderText $mode="list">
                        <DoneIcon sx={{ color: successColor }} /> Lorem Ipsum{" "}
                      </SliderText>
                      <SliderText $mode="list">
                        <DoneIcon sx={{ color: successColor }} /> Lorem Ipsum{" "}
                      </SliderText>
                      <SliderText $mode="list">
                        <DoneIcon sx={{ color: successColor }} /> Lorem Ipsum{" "}
                      </SliderText>
                    </CommonDiv>
                    <ButtonContainer>
                      <Button>Get Plan</Button>
                    </ButtonContainer>
                  </SliderContentInnerContainer>
                </SliderContentContainer>
              </Container>
            </SliderContainer>
          </>
        );
      })}
    </>
  );
};

export default Slider;