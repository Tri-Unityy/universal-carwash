import React from "react";

import {
  Container,
  GalleryContainer,
  GalleryImageContainer,
  SectionHeading,
  TitleContainer,
} from "../assets/style/homeElements";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import about from "./../assets/images/about.jpg";
import exterior from "./../assets/images/exterior.jpg";

const Gallery = () => {
  return (
    <Container $mode="gallery">
      <GalleryContainer>
        <TitleContainer>
          <SectionHeading $mode="gallery">Our Works</SectionHeading>
        </TitleContainer>

        <GalleryImageContainer>
          <ReactCompareSlider
            style={{ width: "80%", height: "100%" }}
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
        </GalleryImageContainer>
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;
