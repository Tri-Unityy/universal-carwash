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
        { lang == "french" ? (
            <>
            Nos offres, du nettoyage des sièges à l'élimination des poils d'animaux et aux traitements 
            anti-odeurs, garantissent que l'intérieur de votre voiture est un havre de propreté et de détente. 
            Rehaussez votre expérience de conduite avec une atmosphère accueillante et agréable.
            <a className="service-button" href="./prices" target="_blank">
              Voir les tarifs
            </a>
            </>
          ):(
            <>Our offerings, from seat cleaning to pet hair removal and odor treatments, ensure your car's 
            inside is a haven of cleanliness and relaxation. Elevate your driving experience with an inviting, 
            pleasant atmosphere.
            <a className="service-button" href="./prices" target="_blank">
              View Prices
            </a>
            </>
          )}
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
      <SectionParagraph $mode="services">
      { lang == "french" ? (
            <>
            Laissez-vous tenter par le lavage et le polissage à la main ultimes, ou par nos soins de chromage pour 
            raviver les surfaces chromées. Offrez à la partie inférieure et au moteur de votre véhicule un nettoyage 
            en profondeur avec notre Service de Nettoyage Châssis-Moteur. Rehaussez l'attrait de votre véhicule avec 
            notre Polissage de Carrosserie Supérieur pour des surfaces impeccables. Obtenez une apparence éblouissante 
            et captivante qui perdure.
            <a className="service-button" href="./prices" target="_blank">
              Voir les tarifs
            </a>
            </>
          ):(
            <>Indulge in the ultimate hand wash and polish, or our Chrome care to revive chrome surfaces. 
            Treat your vehicle's undercarriage and engine to a thorough cleansing with our Chassis-Engine Detailing. 
            Elevate your vehicle's allure with our Superior Body Polishing for flawless surfaces. Achieve a stunning, 
            head-turning appearance that lasts.
            <a className="service-button" href="./prices" target="_blank">
              View Prices
            </a>
            </>
          )}
        </SectionParagraph></div> 
    </ServicesExtendContainer>  
        )}
        {service == 3 && (
         <ServicesExtendContainer>
         <div class="ui-service-card">
          <img src={interior} />
        </div>
        <div class="ui-card_second">
          <SectionParagraph $mode="services">
          { lang == "french" ? (
            <>
            Protégez votre véhicule avec notre Bouclier en Céramique, offrant une protection de peinture de pointe. 
            Améliorez la visibilité les jours de pluie avec notre Répulsif Pluie. Faites-nous confiance pour restaurer 
            habilement la finition de votre véhicule avec notre service de Restauration des Rayures.<br/>
            <a className="service-button" href="./prices" target="_blank">
              Voir les tarifs
            </a>
            </>
          ):(
            <>
            Shield your vehicle with our Ceramic Shield, offering cutting-edge paint protection. Enhance 
            visibility on rainy days with our Rain Repellent. Trust us to expertly restore your vehicle's 
            finish with our Scratch restoration service. <br/>
            <a className="service-button" href="./prices" target="_blank">
              View Prices
            </a>
            </>
          )}
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
          { lang == "french" ? (
            <>
            Assurez des performances optimales avec notre Vérification des Vitres & du Moteur (sur demande), 
            comprenant des inspections minutieuses et des compléments de liquides. Simplifiez votre expérience avec 
            notre Option de Prise en Charge & Retour du Véhicule. Rehaussez la longévité de votre véhicule avec notre 
            Entretien Mensuel, conçu pour maintenir votre trajet en condition optimale.
            <a className="service-button" href="./prices" target="_blank">
              Voir les tarifs
            </a>
            </>
          ):(
            <>
            Ensure peak performance with our Glass & Engine Check (upon request), including thorough inspections and fluid top-ups. Streamline your experience with our Vehicle Pickup & Return option. Elevate your vehicle's longevity with our Monthly Maintenance, tailored to keep your ride in prime condition.
            <a className="service-button" href="./prices" target="_blank">
              View Prices
            </a>
            </>
          )}
          </SectionParagraph>
          </div> 
      </ServicesExtendContainer>  
        )}
      </Container>
    </>    
  );
};

export default ServiceCards;
