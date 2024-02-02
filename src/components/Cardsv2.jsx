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
import { CheckCircle } from "@mui/icons-material";

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
            <p>{cardContent[0].packagePrice}</p>
          </div>
          <div class="card-top">
            <img src={bike} alt="Service" />
          </div>
          <div class="card-content">
            <h3>{cardContent[0].packageType}</h3>
            {cardContent[0].packageDuration != "" && (
              <p>
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small" />{" "}
                  {cardContent[0].packageDuration}
                </span>
              </p>
            )}
            <ul>
              {tagContent[0].item1 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[0].item1}</li>
              ) : null}
              {tagContent[0].item2 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[0].item2}</li>
              ) : null}
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="oval">
            <p>{cardContent[1].packagePrice}</p>
          </div>
          <div class="card-top">
            <img src={bikepremium} alt="Service" />
          </div>
          <div class="card-content">
            <h3>{cardContent[1].packageType}</h3>
            {cardContent[1].packageDuration != "" && (
              <p>
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small" />{" "}
                  {cardContent[1].packageDuration}
                </span>
              </p>
            )}
            <ul>
              {tagContent[1].item1 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[1].item1}</li>
              ) : null}
              {tagContent[1].item2 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[1].item2}</li>
              ) : null}
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="oval">
            <p>{cardContent[2].packagePrice}</p>
          </div>
          <div class="card-top">
            <img src={car} alt="Service" />
          </div>
          <div class="card-content">
            <h3>{cardContent[2].packageType}</h3>
            {cardContent[2].packageDuration != "" && (
              <p>
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small" />{" "}
                  {cardContent[2].packageDuration}
                </span>
              </p>
            )}
            <ul>
              {tagContent[2].item1 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[2].item1}</li>
              ) : null}
              {tagContent[2].item2 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[2].item2}</li>
              ) : null}
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="oval">
            <p>{cardContent[3].packagePrice}</p>
          </div>
          <div class="card-top">
            <img src={carpremium} alt="Service" />
          </div>
          <div class="card-content">
            <h3>{cardContent[3].packageType}</h3>
            {cardContent[3].packageDuration != "" && (
              <p>
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small" />{" "}
                  {cardContent[3].packageDuration}
                </span>
              </p>
            )}
            <ul>
              {tagContent[3].item1 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[3].item1}</li>
              ) : null}
              {tagContent[3].item2 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[3].item2}</li>
              ) : null}
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="oval">
            <p>{cardContent[4].packagePrice}</p>
          </div>
          <div class="card-top">
            <img src={carrim} alt="Service" />
          </div>
          <div class="card-content">
            <h3>{cardContent[4].packageType}</h3>
            {cardContent[4].packageDuration != "" && (
              <p>
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small" />{" "}
                  {cardContent[4].packageDuration}
                </span>
              </p>
            )}
            <ul>
              {tagContent[4].item1 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[4].item1}</li>
              ) : null}
              {tagContent[4].item2 ? (
                <li>
                  <CheckCircle sx={{ color: "#73CE18", height: "18px" }} />
                  {tagContent[4].item2}</li>
              ) : null}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cardsv2;
