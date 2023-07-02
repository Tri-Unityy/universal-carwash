import React from "react";
import { Container } from "../assets/style/homeElements";
import Slider from "./Slider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Packages = () => {
  return (
    <Container $mode="packages">
      <ArrowBackIosIcon />
      <Slider />
      <ArrowForwardIosIcon />
    </Container>
  );
};

export default Packages;
