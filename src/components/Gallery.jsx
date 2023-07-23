import React, { useContext } from "react";
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

import work1 from "./../assets/images/works/work1.jpeg";
import work2 from "./../assets/images/works/work2.jpeg";
import work3 from "./../assets/images/works/work3.jpeg";
import work4 from "./../assets/images/works/work4.jpeg";
import work5 from "./../assets/images/works/work5.jpeg";
import work6 from "./../assets/images/works/work6.jpeg";
import work7 from "./../assets/images/works/work7.jpeg";
import { TranslatorContext } from "../screens/context/TranslatorContext";

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const { lang } = useContext(TranslatorContext);

  return (
    <SectionDiv $mode="gallery" id="ourworks">
      <Container $mode="gallery">
        <TitleContainer>
          { lang === 'french' ? (
            <>
            <SectionHeading $mode="gallery">Galerie</SectionHeading>
            <SectionParagraph $mode="gallery">
              {" "}
              Découvrez nos transformations éclatantes.{" "}
            </SectionParagraph>
            </>
          ) : (
            <>
            <SectionHeading $mode="gallery">Gallery</SectionHeading>
            <SectionParagraph $mode="gallery">
              {" "}
              Discover Our Gleaming Transformations.{" "}
            </SectionParagraph>
            </>
          )}
        </TitleContainer>
        <GalleryContainer>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <img className="masonry" src={work1} />
            <img className="masonry" src={work2} />
            <img className="masonry" src={work3} />
            <img className="masonry" src={work4} />
            <img className="masonry" src={work5} />
            <img className="masonry" src={work6} />
            <img className="masonry" src={work7} />
          </Masonry>
        </GalleryContainer>
      </Container>
    </SectionDiv>
  );
};

export default Gallery;
