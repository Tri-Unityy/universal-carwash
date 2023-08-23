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
         <div class="ui-service-card">
          <img src={interior} />
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
       <div class="ui-service-card">
          <img src={Exterior} />
        </div>
      <div class="ui-card_second">
      <SectionParagraph $mode="services">Indulge in the ultimate hand wash and polish, or our Chrome care to revive chrome surfaces. Treat your vehicle's undercarriage and engine to a thorough cleansing with our Chassis-Engine Detailing. Elevate your vehicle's allure with our Superior Body Polishing for flawless surfaces. Achieve a stunning, head-turning appearance that lasts.</SectionParagraph></div> 
    </ServicesExtendContainer>  
        )}
        {service == 3 && (
         <ServicesExtendContainer>
         <div class="ui-service-card">
          <img src={interior} />
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
         <div class="ui-service-card">
          <img src={interior} />
        </div>
        <div class="ui-card_second">
        <SectionParagraph $mode="services">
          Ensure peak performance with our Glass & Engine Check (upon request), including thorough inspections and fluid top-ups. Streamline your experience with our Vehicle Pickup & Return option. Elevate your vehicle's longevity with our Monthly Maintenance, tailored to keep your ride in prime condition.
          </SectionParagraph>
          </div> 
      </ServicesExtendContainer>  
        )}
      </Container>
    </>    
  );
};

export default ServiceCards;
