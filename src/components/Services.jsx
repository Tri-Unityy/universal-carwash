import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./../assets/style/css/services.css";
import { staggerContainer} from "../utils/motion";
import {
  SectionParagraph,
  ServicesParagraphContainer,
  ServicesImageContainer,
  ServicesImage,
  ServicesContainer,
  OneService,
  OneServiceText,
  TextSector,
  ImageSector,
  MainServiceHeading,
  MainServiceHeader
} from "../assets/style/homeElements";
import ServiceDetailsCards from "./Service_Details_Cards";
import i1 from "../assets/images/cubeicons/1.png";
import i2 from "../assets/images/cubeicons/2.png";
import i3 from "../assets/images/cubeicons/3.png";
import i4 from "../assets/images/cubeicons/4.png";
import i5 from "../assets/images/cubeicons/5.png";
import i6 from "../assets/images/cubeicons/6.png";
import {
  ServiceContext,
  TranslatorContext,
} from "../screens/context/TranslatorContext";
import ServiceCards from "./ServiceCards";

const Services = () => {
  const { lang } = useContext(TranslatorContext);
  const { service, setService } = useContext(ServiceContext);
  return (
    <motion.section
      id="services"
      className="services"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      style={{ marginTop:'50px' }}
    >
      <ServicesContainer>
        <MainServiceHeader>
        <MainServiceHeading>
                  {lang === "french"
                    ? "Nos Services"
                    : "Our Services"}
                </MainServiceHeading>
                </MainServiceHeader>
        <ServicesParagraphContainer>
          {lang === "french" ? (
            <SectionParagraph $mode="services">
              Nous proposons à la fois des forfaits et des catégories de
              services individuels. En plus des services principaux, nous
              effectuons d'autres traitements sur demande tels que le nettoyage
              de taches sur les sièges, le traitement du cuir, l'élimination des
              poils de chien, etc. En cas de dommage constaté lors du nettoyage,
              nous déclinons toute responsabilité.
              <br />
              <br />
            </SectionParagraph>
          ) : (
            <SectionParagraph $mode="services">
              We provide both packages and individual service categories. Other
              than the main services, we carry out other treatments on your
              request such as: cleaning of stains on seats, leather treatment,
              dog hair, etc. In the event of damage noted during cleaning, we
              decline all responsibility.
              <br />
              <br />
            </SectionParagraph>
          )}
        </ServicesParagraphContainer>
        <ServicesImageContainer>
          <OneService
            className="oneService"
            style={{ backgroundColor: service == 1 && "white" }}
            onClick={() => setService(1)}
          >
            <ImageSector>
            <ServicesImage src={i1} />
            </ImageSector>
            <TextSector>
            <OneServiceText
              style={{
                color: service == 1 && "black",
                fontWeight: service == 1 && 700,
              }}
            >
              { lang === "french" ? ('Détail Intérieur') : ('Interior Detailing')}
            </OneServiceText>
            </TextSector>
          </OneService>
          <OneService
            className="oneService"
            style={{ backgroundColor: service == 2 && "white" }}
            onClick={() => setService(2)}
          >
            <ImageSector>
            <ServicesImage src={i6} />
            </ImageSector>
            <TextSector>
            <OneServiceText
              style={{
                color: service == 2 && "black",
                fontWeight: service == 2 && 700,
              }}
            >
              { lang === "french" ? ('Polissage Extérieur') : ('Exterior polishing')}
            </OneServiceText>
            </TextSector>
          </OneService>
          <OneService
            className="oneService"
            style={{ backgroundColor: service == 3 && "white" }}
            onClick={() => setService(3)}
          >
            <ImageSector>
            <ServicesImage src={i2} />
            </ImageSector>
            <TextSector>
            <OneServiceText
              style={{
                color: service == 3 && "black",
                fontWeight: service == 3 && 700,
              }}
            >
              { lang === "french" ? ('Protection Avancée') : ('Advanced protection')}
            </OneServiceText>
            </TextSector>
          </OneService>
          <OneService
            className="oneService"
            style={{ backgroundColor: service == 4 && "white" }}
            onClick={() => setService(4)}
          >
             <ImageSector>
            <ServicesImage src={i3} />
            </ImageSector>
            <TextSector>
            <OneServiceText
              style={{
                color: service == 4 && "black",
                fontWeight: service == 4 && 700,
              }}
            >
              { lang === "french" ? ('Soins Pratiques') : ('Convenient Care')}
            </OneServiceText>
            </TextSector>
          </OneService>
        </ServicesImageContainer>
      </ServicesContainer>
      <a className="services-button" href="/services" target="_blank">
        { lang === "french" ? ('Plus de détails') : ('More details')}
      </a>
      <ServiceCards />
    </motion.section>
  );
};

export default Services;
