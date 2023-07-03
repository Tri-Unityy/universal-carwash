import React from "react";
import Masonry from "react-masonry-css";
import {
  Container,
  GalleryContainer,
  SectionDiv,
  SectionHeading,
  SectionParagraph,
  TitleContainer,
} from "../assets/style/homeElements";

import "./../assets/style/css/masonry.css";
import about from "./../assets/images/about.jpg";
import exterior from "./../assets/images/exterior.jpg";
const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <SectionDiv $mode="gallery" id="ourworks">
      <Container $mode="gallery">
        <TitleContainer>
          <SectionHeading $mode="gallery">Our Works</SectionHeading>
          <SectionParagraph>
            {" "}
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum{" "}
          </SectionParagraph>
        </TitleContainer>
        <GalleryContainer>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <img className="masonry" src={about} />
            <img className="masonry" src={exterior} />
            <img className="masonry" src={about} />
            <img className="masonry" src={exterior} />
            <img className="masonry" src={about} />
            <img className="masonry" src={exterior} />
          </Masonry>
        </GalleryContainer>
      </Container>
    </SectionDiv>
  );
};

export default Gallery;
