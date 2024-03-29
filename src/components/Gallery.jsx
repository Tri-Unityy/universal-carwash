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

import work1 from "./../assets/images/works/work1.jpg";
import work2 from "./../assets/images/works/work2.jpg";
import work3 from "./../assets/images/works/work3.jpeg";
import work4 from "./../assets/images/works/work4.jpg";
import work5 from "./../assets/images/works/work5.jpeg";
import work6 from "./../assets/images/works/work6.jpg";
import work7 from "./../assets/images/works/work7.jpg";
import work8 from "./../assets/images/works/work8.jpg";
import work9 from "./../assets/images/works/work9.jpg";
import work10 from "./../assets/images/works/work10.jpeg";
import work11 from "./../assets/images/works/work11.jpg";
import work12 from "./../assets/images/works/work12.jpeg";
import work13 from "./../assets/images/works/work13.jpg";
import work14 from "./../assets/images/works/work14.jpeg";
import work15 from "./../assets/images/works/work15.jpeg";
import work16 from "./../assets/images/works/work16.jpg";
import work17 from "./../assets/images/works/work17.jpeg";
import work18 from "./../assets/images/works/work18.jpg";
import work19 from "./../assets/images/works/work19.jpg";
import work20 from "./../assets/images/works/work20.jpeg";

import { TranslatorContext } from "../screens/context/TranslatorContext";

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const { lang } = useContext(TranslatorContext);

  // const gallery = require.context("./../assets/images/works", true)
  // const galleryList = gallery.keys().map(g => gallery(g));
  const galleryList = [
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    work10,
    work11,
    work12,
    work13,
    work14,
    work15,
    work16,
    work17,
    work18,
    work19,
    work20,
  ];

  return (
    <SectionDiv $mode="gallery" id="ourworks">
      <Container $mode="gallery">
        <TitleContainer>
          {lang === "french" ? (
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
            {galleryList.map((element) => (
              <div className="masonry-container">
                <img className="masonry" src={element} />
              </div>
            ))}
          </Masonry>
        </GalleryContainer>
      </Container>
    </SectionDiv>
  );
};

export default Gallery;
