import React, { useState, useEffect } from "react";
import {
  Container,
  SliderImageContainer,
  SliderContentContainer,
} from "../assets/style/homeElements";

import packages from "../constants";

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
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Container $mode="slider">
      <SliderImageContainer>Image</SliderImageContainer>
      <SliderContentContainer>Content</SliderContentContainer>
    </Container>
  );
};

export default Slider;
