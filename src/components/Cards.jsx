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
import { ServiceContext, TranslatorContext } from "../screens/context/TranslatorContext";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { primaryHeadingColor, successColor } from "../assets/resources/colors";

const Cards = () => {
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
      <Container $mode="packages">
        {service == 1 && (
          <>
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
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
          </>
        )}

        {service == 2 && (
          <>
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
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
          </>
        )}

        {service == 3 && (
          <>
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
              {/* <div class="tags"> Interior </div>
              <div class="tags"> Exterior </div> */}
            </div>
          </div>
        </div>
          </>
        )}

        {service == 4 && (
          <>
          <div class="ui-card">
          <img src="" />
          <div class="heading">
            <h3>Micro Scratches Repair</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>Correcting Medium defects</h3>
            <div class="line"></div>
            <p>
              {/* <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "} <br/>
                <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small"/>{" "}
                  
                </span> */}
            </p>
            <div class="tag-container">
                <div class="tags">
                  {" "}
                  <span>MECHANICAL POLISHING WITH BUFFER</span>{" "}
                </div>
            </div>
          </div>
        </div>
          <div class="ui-card">
          <img src="" />
          <div class="heading">
            <h3>Scratches, Scuffs Repair</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>Small and Medium Scratches and Scuffs</h3>
            <div class="line"></div>
            <p>
              <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "}FROM 45.- <br/>
                {/* <span><AccessTimeIcon sx={{ color: primaryHeadingColor }} fontSize="small"/>{" "}
                  
                </span> */}
            </p>
            <div class="tag-container">
                <div class="tags">
                  {/* {" "}
                  <span></span>{" "} */}
                </div>
            </div>
          </div>
        </div>
          </>
        )}

        {service == 6 && (
          <>
          <div class="ui-card" style={{width: "80%"}}>
          <img src="" />
          <div class="heading">
            <h3>Other services</h3>
            <div class="line"></div>
          </div>
          <div class="description">
            <h3>Other services</h3>
            <div class="line"></div>
            <p style={{textAlign: "right"}}>
              <PaymentsIcon sx={{ color: primaryHeadingColor }} />{" "} <br/>
                <span>{" "}
                  HEADLIGHT LENS RESTORATION (DURING THIS SERVICE, EXTERIOR OR INTERIOR WASH IS OFFERED)
                </span>{" "}PER UNIT 190 CHF <br/>
                <span>{" "}
                  CHROME CARE
                </span>{" "}FROM 40 CHF <br />
                <span>{" "}
                  LEATHER MAINTENANCE WAX SHINE
                </span>{" "}(UPON REQUEST) <br/>
                <span>{" "}
                SEAT CLEANING
                </span>{" "}FROM 20 CHF <br/>
                <span>{" "}
                CHASSIS-ENGINE WASH
                </span>{" "}110 CHF <br/>
            </p>
            {/* <div class="tag-container">
                <div class="tags">
                  {" "}
                  <span></span>{" "}
                </div>
            </div> */}
          </div>
        </div>
        </>
        )}
      </Container>
    </>    
  );
};

export default Cards;
