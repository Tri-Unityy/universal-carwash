import React from "react";
import { Container } from "../assets/style/homeElements";
import work1 from "./../assets/images/works/work1.jpeg";
import "./../assets/style/css/cards.css";

import bike from "./../assets/images/packages/bike.jpg";
import bikepremium from "./../assets/images/packages/bike-premium.jpg";
import carpremium from "./../assets/images/packages/car-premium.jpg";
import carrim from "./../assets/images/packages/car-rim.jpg";
import car from "./../assets/images/packages/car.jpg";

const Cards = () => {
  return (
    <>
      <Container $mode="packages">
        <div class="ui-card">
          <img src={bike} />
          <div class="description">
            <h3>Bike Normal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="ui-card">
          <img src={bikepremium} />
          <div class="description">
            <h3>Bike Premium</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="ui-card">
          <img src={car} />
          <div class="description">
            <h3>4 x 4 Normal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="ui-card">
          <img src={carpremium} />
          <div class="description">
            <h3>4 x 4 Premium</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="ui-card">
          <img src={carrim} />
          <div class="description">
            <h3>Rim Cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cards;
