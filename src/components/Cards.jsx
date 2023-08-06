import React, { useContext } from "react";
import { Container } from "../assets/style/homeElements";
import "./../assets/style/css/cards.css";

import bike from "./../assets/images/packages/bike.jpg";
import bikepremium from "./../assets/images/packages/bike-premium.jpg";
import carpremium from "./../assets/images/packages/car-premium.jpg";
import carrim from "./../assets/images/packages/car-rim.jpg";
import car from "./../assets/images/packages/car.jpg";
import packagesE from "../constants/packageEnglish";
import packagesF from "../constants/packageFrench";
import { TranslatorContext } from "../screens/context/TranslatorContext";

const Cards = () => {
  const { lang } = useContext(TranslatorContext);
  var cardContent = {};
  if (lang == "french") {
    cardContent = packagesF;
  } else {
    cardContent = packagesE;
  }
  const tagContent = [];
  cardContent.forEach((p) => {
    tagContent.push(p.packageItems);
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
                {cardContent[0].packageDuration != "" && (
                  <li>{cardContent[0].packageDuration}</li>
                )}
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[0].item1 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[0].item1}</span>{" "}
                </div>
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
                {cardContent[1].packageDuration != "" && (
                  <li>{cardContent[1].packageDuration}</li>  
                )}
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[1].item1 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[1].item1}</span>{" "}
                </div>
              ) : null}
              {tagContent[1].item2 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[1].item2}</span>{" "}
                </div>
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
                {cardContent[2].packageDuration != "" && (
                  <li>{cardContent[2].packageDuration}</li>  
                )}
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[2].item1 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[2].item1}</span>{" "}
                </div>
              ) : null}
              {tagContent[2].item2 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[2].item2}</span>{" "}
                </div>
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
                {cardContent[3].packageDuration != "" && (
                  <li>{cardContent[3].packageDuration}</li>  
                )}
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[3].item1 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[3].item1}</span>{" "}
                </div>
              ) : null}
              {tagContent[3].item2 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[3].item2}</span>{" "}
                </div>
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
                {cardContent[4].packageDuration != "" && (
                  <li>{cardContent[4].packageDuration}</li>  
                )}
              </ul>
            </p>
            <div class="tag-container">
              {tagContent[4].item1 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[4].item1}</span>{" "}
                </div>
              ) : null}
              {tagContent[4].item2 ? (
                <div class="tags">
                  {" "}
                  <span>{tagContent[4].item2}</span>{" "}
                </div>
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
