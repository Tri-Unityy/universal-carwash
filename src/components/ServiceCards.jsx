import React, { useContext } from "react";
import { Container, SectionHeading ,ServicesExtendContainer,SectionParagraph} from "../assets/style/homeElements";
import "./../assets/style/css/cards.css";

import interior from "./../assets/images/interior.jpeg";
import Exterior from "./../assets/images/Exterior.jpeg";
import packagesE from "../constants/packageEnglish";
import packagesF from "../constants/packageFrench";
import { ServiceContext, TranslatorContext } from "../screens/context/TranslatorContext";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { primaryHeadingColor, successColor } from "../assets/resources/colors";

const ServiceCards = () => {
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
          <ServicesExtendContainer>
         <div class="ui-card">
          <img src={interior} />
          <div class="heading">
            <h3>Interior</h3>
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
        <div class="ui-card_second">
        <SectionParagraph $mode="services">
          Our offerings, from seat cleaning to pet hair removal and odor treatments, ensure your car's inside is a haven of cleanliness and relaxation. Elevate your driving experience with an inviting, pleasant atmosphere.
          </SectionParagraph>
          </div> 
      </ServicesExtendContainer>        
        )}
        {service == 2 && (
       <ServicesExtendContainer>
       <div class="ui-card">
        <img src={Exterior} />
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
      <div class="ui-card_second">
      <SectionParagraph $mode="services">Indulge in the ultimate hand wash and polish, or our Chrome care to revive chrome surfaces. Treat your vehicle's undercarriage and engine to a thorough cleansing with our Chassis-Engine Detailing. Elevate your vehicle's allure with our Superior Body Polishing for flawless surfaces. Achieve a stunning, head-turning appearance that lasts.</SectionParagraph></div> 
    </ServicesExtendContainer>  
        )}
        {service == 3 && (
         <ServicesExtendContainer>
         <div class="ui-card">
          <img src={Exterior} />
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
        <div class="ui-card_second">
        <SectionParagraph $mode="services">
          Shield your vehicle with our Ceramic Shield, offering cutting-edge paint protection. Enhance visibility on rainy days with our Rain Repellent. Trust us to expertly restore your vehicle's finish with our Scratch restoration service.
          </SectionParagraph>
          </div> 
      </ServicesExtendContainer>  
        )}
        {service == 4 && (
          <ServicesExtendContainer>
         <div class="ui-card">
          <img src={interior} />
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
        <div class="ui-card_second">
        <SectionParagraph $mode="services">
          Ensure peak performance with our Glass & Engine Check (upon request), including thorough inspections and fluid top-ups. Streamline your experience with our Vehicle Pickup & Return option. Elevate your vehicle's longevity with our Monthly Maintenance, tailored to keep your ride in prime condition.
          </SectionParagraph>
          </div> 
      </ServicesExtendContainer>  
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

export default ServiceCards;
