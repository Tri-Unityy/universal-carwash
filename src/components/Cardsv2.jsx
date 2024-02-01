import React, { useContext } from "react";
import { Container, SectionHeading } from "../assets/style/homeElements";
import "./../assets/style/css/cards.css";

import "./../assets/style/css/cardsv2.css";

import bike from "./../assets/images/packages/bike.jpg";
import bikepremium from "./../assets/images/packages/bike-premium.jpg";
import carpremium from "./../assets/images/packages/car-premium.jpg";
import carrim from "./../assets/images/packages/car-rim.jpg";
import car from "./../assets/images/packages/car.jpg";
import packagesE from "../constants/packageEnglish";
import packagesF from "../constants/packageFrench";
import { ServiceContext, TranslatorContext } from "../screens/context/TranslatorContext";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { primaryHeadingColor, successColor } from "../assets/resources/colors";

const Cardsv2 = () => {
  const { lang } = useContext(TranslatorContext);
  const { service } = useContext(ServiceContext);
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
      {lang === "french" ? (
        <SectionHeading style={{ fontSize: "35px" }}>Nos Forfaits</SectionHeading>
      ) : (
        <SectionHeading style={{ fontSize: "35px" }}>Our Packages</SectionHeading>
      )}
      <Container $mode="packages">
      
      <div class="card">
      <div class="oval">
        <p>price onwards</p>
      </div>
      <div class="card-top">
        <img src={bike} alt="Service" />
      </div>
      <div class="card-content">
        <h3>{cardContent[0].packageType}</h3>
        <ul>
          {tagContent[0].item1 ? (
                <li>{tagContent[0].item1}</li>
              ) : null}
        </ul>
        <div class="price-container">
          <p>{cardContent[0].packagePrice}</p>
        </div>
      </div>
    </div>

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
              <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "}{cardContent[0].packagePrice} <br/>
              {cardContent[0].packageDuration != "" && (
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small"/>{" "}
                  {cardContent[0].packageDuration}
                </span>
              )}
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
            <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "}{cardContent[1].packagePrice} <br/>
              {cardContent[1].packageDuration != "" && (
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small"/>{" "}
                  {cardContent[1].packageDuration}
                </span>
              )}
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
            <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "}{cardContent[2].packagePrice} <br/>
              {cardContent[2].packageDuration != "" && (
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small"/>{" "}
                  {cardContent[2].packageDuration}
                </span>
              )}
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
            <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "}{cardContent[3].packagePrice} <br/>
              {cardContent[3].packageDuration != "" && (
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small"/>{" "}
                  {cardContent[3].packageDuration}
                </span>
              )}
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
              <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "}{cardContent[4].packagePrice} <br/>
              {cardContent[4].packageDuration != "" && (
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small"/>{" "}
                  {cardContent[4].packageDuration}
                </span>
              )}
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
            </div>
          </div>
        </div>
      </Container>
    </>    
  );
};

export default Cardsv2;
