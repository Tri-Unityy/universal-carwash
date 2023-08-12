import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./../assets/style/css/services.css";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
import {
  SectionHeading,
  SectionParagraph,
  ServicesParagraphContainer,
  ServicesImageContainer,
  ServicesImage,
  ServicesContainer,
  OneService,
  OneServiceText
} from "../assets/style/homeElements";

import i1 from "../assets/images/cubeicons/1.png";
import i2 from "../assets/images/cubeicons/2.png";
import i4 from "../assets/images/cubeicons/4.png";
import i5 from "../assets/images/cubeicons/5.png";
import i6 from "../assets/images/cubeicons/6.png";
import { ServiceContext, TranslatorContext } from "../screens/context/TranslatorContext";

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
    >
      <ServicesContainer>
        <motion.div variants={textVariant()}>
          {lang === "french" ? (
            <SectionHeading>Nos Services</SectionHeading>
          ) : (
            <SectionHeading>Our Services</SectionHeading>
          )}
        </motion.div>
        <ServicesParagraphContainer>
          {lang === "french" ? (
            // <>
            //   <SectionParagraph $mode="services">
            //     <motion.p variants={fadeIn("", "", 0.1, 1)}>
            //       Nos services complets de lavage et de nettoyage comprennent :
            //       <ul>
            //         <li>Nettoyage complet intérieur et extérieur</li>
            //         <li>
            //           Détailing intérieur pour restaurer la fraîcheur et la
            //           propreté
            //         </li>
            //         <li>
            //           Finition extérieure impeccable pour un résultat digne d'un
            //           showroom
            //         </li>
            //         <li>Réparations expertes des éraflures</li>
            //         <li>
            //           Traitements personnalisés selon vos demandes spécifiques
            //         </li>
            //       </ul>
            //       {/* Nous effectuons également d'autres traitements sur demande, tels que le nettoyage des taches sur les sièges, le traitement du cuir, l'élimination des poils de chien, etc.
            //       En cas de dommage constaté lors du nettoyage, nous déclinons toute responsabilité.<br /> */}
            //     </motion.p>
            //   </SectionParagraph>
              <SectionParagraph $mode="services">
                Nous effectuons également d'autres traitements sur demande, tels
                que le nettoyage des taches sur les sièges, le traitement du
                cuir, l'élimination des poils de chien, etc. En cas de dommage
                constaté lors du nettoyage, nous déclinons toute responsabilité.
                <br /><br/>
              </SectionParagraph>
            // </>
          ) : (
            // <>
            //   <SectionParagraph $mode="services">
            //     <motion.p variants={fadeIn("", "", 0.1, 1)}>
            //       Our comprehensive washing and cleaning services include :
            //       <ul>
            //         <li>
            //           Complete washing and cleaning services (interior + exterior)
            //         </li>
            //         <li>
            //           Interior detailing to restore freshness and cleanliness
            //         </li>
            //         <li>Flawless exterior shine for a showroom-worthy finish</li>
            //         <li>Expert scratch repairs</li>
            //         <li>
            //           Personalised treatments based on your specific requests
            //         </li>
            //       </ul>
            //       {/* We carry out other treatments on your request such as: cleaning of stains on seats, leather treatment, dog hair, etc.
            //       In the event of damage noted during cleaning, we decline all responsibility.<br /> */}
            //     </motion.p>
            //   </SectionParagraph>
              <SectionParagraph $mode="services">
                We carry out other treatments on your request such as: cleaning
                of stains on seats, leather treatment, dog hair, etc. In the
                event of damage noted during cleaning, we decline all
                responsibility.
                <br /><br/>
              </SectionParagraph>
            // </>
          )}
        </ServicesParagraphContainer>
        <ServicesImageContainer>
          <OneService className="oneService" style={{backgroundColor: service == 1 && "white"}} 
          onClick={()=>setService(1)}>
            <ServicesImage src={i1} />
            <OneServiceText style={{color: service == 1 && "black", fontWeight: service == 1 && 700}}>
              Bike Services
            </OneServiceText>
          </OneService>
          <OneService className="oneService" style={{backgroundColor: service == 2 && "white"}} 
          onClick={()=>setService(2)}>
            <ServicesImage src={i5} />
            <OneServiceText style={{color: service == 2 && "black", fontWeight: service == 2 && 700}}>
              4x4 Services
            </OneServiceText>
          </OneService>
          <OneService className="oneService" style={{backgroundColor: service == 3 && "white"}} 
          onClick={()=>setService(3)}>
            <ServicesImage src={i4} />
            <OneServiceText style={{color: service == 3 && "black", fontWeight: service == 3 && 700}}>
              Rim Cleaning
            </OneServiceText>
          </OneService>
          <OneService className="oneService" style={{backgroundColor: service == 4 && "white"}} 
          onClick={()=>setService(4)}>
            <ServicesImage src={i6} />
            <OneServiceText style={{color: service == 4 && "black", fontWeight: service == 4 && 700}}>
              Repairing
            </OneServiceText>
          </OneService>
          <OneService className="oneService" style={{backgroundColor: service == 5 && "white"}} 
          onClick={()=>setService(5)}>
            <ServicesImage src={i2} />
            <OneServiceText style={{color: service == 5 && "black", fontWeight: service == 5 && 700}}>
              Treatments
            </OneServiceText>
          </OneService>
        </ServicesImageContainer>
      </ServicesContainer>
    </motion.section>
  );
};

export default Services;
