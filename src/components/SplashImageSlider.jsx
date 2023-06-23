import React from "react";
import "./../assets/style/css/splash-image-slider.css";
import about from "./../assets/images/about.jpg";
const SplashImageSlider = () => {
  return (
    <div className="container">
      <div className="slider">
        <div className="slide-image">
          <img src={about} />
        </div>
        <div className="slider-content">
          <h2> Exterior Cleaning </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashImageSlider;
