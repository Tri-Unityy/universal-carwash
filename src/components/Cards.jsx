import React from "react";
import { Container } from "../assets/style/homeElements";
import work1 from "./../assets/images/works/work1.jpeg";
import "./../assets/style/css/cards.css";

import bike from "./../assets/images/packages/bike.jpg";
import bikepremium from "./../assets/images/packages/bike-premium.jpg";
import carpremium from "./../assets/images/packages/car-premium.jpg";
import carrim from "./../assets/images/packages/car-rim.jpg";
import car from "./../assets/images/packages/car.jpg";
import packagesE from "../constants/packageEnglish";

const Cards = () => {
  const cardContent = packagesE;
  const tagContent = [];
  cardContent.forEach(p => {
    tagContent.push(p.packageItems)
  });
  
  return (
    <>
      <Container $mode="packages">
        <div class="ui-card">
          <img src={bike} />
          <div class="heading">
            <h3>{cardContent[0].packageType}</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>{cardContent[0].packageType}</h3>
            <div class="line"></div>
            <p>
              <ul>
                <li>{cardContent[0].packagePrice}</li>
                <li>{cardContent[0].packageDuration}</li>
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[0].item1 ? (
                  <div class="tags"> {tagContent[0].item1} </div>
                ) : null}
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
        <div class="ui-card">
          <img src={bikepremium} />
          <div class="heading">
            <h3>{cardContent[1].packageType}</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>{cardContent[1].packageType}</h3>
            <div class="line"></div>
            <p>
              <ul>
                <li>{cardContent[1].packagePrice}</li>
                <li>{cardContent[1].packageDuration}</li>
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[1].item1 ? (
                  <div class="tags"> {tagContent[1].item1} </div>
                ) : null}
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
        <div class="ui-card">
          <img src={car} />
          <div class="heading">
            <h3>{cardContent[2].packageType}</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>{cardContent[2].packageType}</h3>
            <div class="line"></div>
            <p>
              <ul>
                <li>{cardContent[2].packagePrice}</li>
                <li>{cardContent[2].packageDuration}</li>
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[2].item1 ? (
                  <div class="tags"> {tagContent[2].item1} </div>
                ) : null}
              {tagContent[2].item2 ? (
                  <div class="tags"> {tagContent[2].item2} </div>
                ) : null}
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
        <div class="ui-card">
          <img src={carpremium} />
          <div class="heading">
            <h3>{cardContent[3].packageType}</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>{cardContent[3].packageType}</h3>
            <div class="line"></div>
            <p>
              <ul>
                <li>{cardContent[3].packagePrice}</li>
                <li>{cardContent[3].packageDuration}</li>
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[3].item1 ? (
                  <div class="tags"> {tagContent[3].item1} </div>
                ) : null}
              {tagContent[3].item2 ? (
                  <div class="tags"> {tagContent[3].item2} </div>
                ) : null}
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
        <div class="ui-card">
          <img src={carrim} />
          <div class="heading">
            <h3>{cardContent[4].packageType}</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>{cardContent[4].packageType}</h3>
            <div class="line"></div>
            <p>
              <ul>
                <li>{cardContent[4].packagePrice}</li>
                <li>{cardContent[4].packageDuration}</li>
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[4].item1 ? (
                  <div class="tags"> {tagContent[4].item1} </div>
                ) : null}
              {tagContent[4].item2 ? (
                  <div class="tags"> {tagContent[4].item2} </div>
                ) : null}
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cards;
