import React from "react";
import Masonry from "react-masonry-css";
import {
  Container,
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
    <Container $mode="gallery">
      <TitleContainer>
        <SectionHeading $mode="gallery">Our Works</SectionHeading>
        <SectionParagraph>
          {" "}
          Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum{" "}
        </SectionParagraph>
      </TitleContainer>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={"my-masonry-grid"}
        columnClassName={"my-masonry-grid_column"}
      >
        <img src={about} />
        <img src={exterior} />
        <img src={about} />
        <img src={exterior} />
        <img src={about} />
        <img src={exterior} />
      </Masonry>
    </Container>
  );
};

export default Gallery;
