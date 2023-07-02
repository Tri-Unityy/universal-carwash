import React from "react";
import { Container, SectionDiv } from "../assets/style/homeElements";
import Slider from "./Slider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Packages = () => {
  return (
    <Container $mode="packages">
      <ArrowBackIosIcon sx={{ color: "#fff" }} />
      <SectionDiv $mode="slider">
        <Slider />
      </SectionDiv>
      <ArrowForwardIosIcon sx={{ color: "#fff" }} />
    </Container>
  );
};

export default Packages;
