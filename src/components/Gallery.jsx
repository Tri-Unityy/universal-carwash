import React from "react";
import {
  Container,
  GalleryContainer,
  GalleryImageContainer,
  SectionHeading,
} from "../assets/style/homeElements";

const Gallery = () => {
  return (
    <Container $mode="gallery">
      <GalleryContainer>
        <SectionHeading $mode="gallery">Gallery</SectionHeading>
        <GalleryImageContainer>Gallery image</GalleryImageContainer>
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;
