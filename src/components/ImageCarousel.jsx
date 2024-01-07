import React, { useState } from "react";
import {
  CarouselContainer,
  CarouselContent1,
  CarouselContent2,
  CarouselContent,
} from "../assets/style/priceElements";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <CarouselContainer>
      <CarouselContent>
        <ArrowLeftIcon
          onClick={goToPreviousImage}
          sx={{
            color: "#fff",
            width: "80px",
            height: "80px",
            "@media screen and (max-width: 1024px)": {
              width: "60px",
              height: "60px",
            },
            "@media screen and (max-width: 768px)": {
              width: "40px",
              height: "40px",
            },
          }}
        />
      </CarouselContent>
      <CarouselContent2>
        <img
          src={images[currentIndex]}
          alt="Current Image"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </CarouselContent2>
      <CarouselContent1>
        <ArrowRightIcon
          onClick={goToNextImage}
          sx={{
            color: "#fff",
            width: "80px",
            height: "80px",
            "@media screen and (max-width: 1024px)": {
              width: "60px",
              height: "60px",
            },
            "@media screen and (max-width: 768px)": {
              width: "40px",
              height: "40px",
            },
          }}
        />
      </CarouselContent1>
    </CarouselContainer>
  );
};

export default ImageCarousel;
