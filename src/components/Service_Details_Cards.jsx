import React, { useContext } from "react";
import {
  CardContainer,
  CardDetailContainer,
  ImageSection,
  BreakDownSection,
  CardServiceContainer,
  SubServiceHeader,
  SubServiceDescription,
  SubServiceBullets,
  SubServicePrice,
  SubServiceHeading,
  SubServiceDescriptionText,
  SubServicePriceText,
  SubServiceBulletsText,
  MainServiceHeading,
  MainServiceHeader,
  BulletsContainer,
  IconSection,
  PointSection,
} from "../assets/style/priceElements";
import ImageCarousel from "./ImageCarousel";
import "./../assets/style/css/cards.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import packagesE from "../constants/packageEnglish";
import packagesF from "../constants/packageFrench";
import pricesE from "../constants/priceEnglish";
import pricesF from "../constants/priceFrench";
import {
  ServiceContext,
  TranslatorContext,
} from "../screens/context/TranslatorContext";


const ServiceDetailsCards = () => {
  const { lang } = useContext(TranslatorContext);
  const { service } = useContext(ServiceContext);
  var cardContent = {};
  var priceContent = {};
  if (lang == "french") {
    cardContent = packagesF;
    priceContent = pricesF;
  } else {
    cardContent = packagesE;
    priceContent = pricesE;
  }
  const tagContent = [];
  cardContent.forEach((p) => {
    tagContent.push(p.packageItems);
  });

  return (
    <>
      <CardDetailContainer $mode="detail">
        <CardContainer>
          {service == 1 && (
            <>
              <MainServiceHeader>
                <MainServiceHeading>
                  {lang === "french"
                    ? "Détail Intérieur"
                    : "Interior Detailing"}
                </MainServiceHeading>
              </MainServiceHeader>
              {priceContent[0]["services"] != [] &&
                priceContent[0]["services"].map((element) => (
                  <CardServiceContainer>
                    <ImageSection>
                      <ImageCarousel images={element.img} />
                    </ImageSection>
                    <BreakDownSection>
                      <SubServiceHeader>
                        <SubServiceHeading>{element.name}</SubServiceHeading>
                      </SubServiceHeader>
                      <SubServiceDescription>
                        <SubServiceDescriptionText>
                          {element.desc}
                        </SubServiceDescriptionText>
                      </SubServiceDescription>
                      <SubServiceBullets>
                        {element.points &&
                          element.points.map((point, index) => (
                            <BulletsContainer>
                              <IconSection>
                                <CheckCircleIcon
                                  sx={{ color: "#73CE18", height: "20px" }}
                                />
                              </IconSection>
                              <PointSection>
                                <SubServiceBulletsText key={index}>
                                  {point}
                                </SubServiceBulletsText>
                              </PointSection>
                            </BulletsContainer>
                          ))}
                      </SubServiceBullets>
                      <SubServicePrice>
                        <SubServicePriceText>
                          {element.price}
                        </SubServicePriceText>
                      </SubServicePrice>
                    </BreakDownSection>
                  </CardServiceContainer>
                ))}
            </>
          )}
          {service == 2 && (
            <>
              <MainServiceHeader>
                <MainServiceHeading>
                  {lang === "french"
                    ? "Polissage Extérieur"
                    : "Exterior polishing"}
                </MainServiceHeading>
              </MainServiceHeader>
              {priceContent[1]["services"] != [] &&
                priceContent[1]["services"].map((element) => (
                  <CardServiceContainer>
                    <ImageSection>
                      <ImageCarousel images={element.img} />
                    </ImageSection>
                    <BreakDownSection>
                      <SubServiceHeader>
                        <SubServiceHeading>{element.name}</SubServiceHeading>
                      </SubServiceHeader>
                      <SubServiceDescription>
                        <SubServiceDescriptionText>
                          {element.desc}
                        </SubServiceDescriptionText>
                      </SubServiceDescription>
                      <SubServiceBullets>
                        {element.points &&
                          element.points.map((point, index) => (
                            <BulletsContainer>
                              <IconSection>
                                <CheckCircleIcon
                                  sx={{ color: "#73CE18", height: "20px" }}
                                />
                              </IconSection>
                              <PointSection>
                                <SubServiceBulletsText key={index}>
                                  {point}
                                </SubServiceBulletsText>
                              </PointSection>
                            </BulletsContainer>
                          ))}
                      </SubServiceBullets>
                      <SubServicePrice>
                        <SubServicePriceText>
                          {element.price}
                        </SubServicePriceText>
                      </SubServicePrice>
                    </BreakDownSection>
                  </CardServiceContainer>
                ))}
            </>
          )}
          {service == 3 && (
            <>
              <MainServiceHeader>
                <MainServiceHeading>
                  {lang === "french"
                    ? "Protection Avancée"
                    : "Advanced protection"}
                </MainServiceHeading>
              </MainServiceHeader>
              {priceContent[2]["services"] != [] &&
                priceContent[2]["services"].map((element) => (
                  <CardServiceContainer>
                    <ImageSection>
                      <ImageCarousel images={element.img} />
                    </ImageSection>
                    <BreakDownSection>
                      <SubServiceHeader>
                        <SubServiceHeading>{element.name}</SubServiceHeading>
                      </SubServiceHeader>
                      <SubServiceDescription>
                        <SubServiceDescriptionText>
                          {element.desc}
                        </SubServiceDescriptionText>
                      </SubServiceDescription>
                      <SubServiceBullets>
                        {element.points &&
                          element.points.map((point, index) => (
                            <BulletsContainer>
                              <IconSection>
                                {" "}
                                <CheckCircleIcon
                                  sx={{ color: "#73CE18", height: "20px" }}
                                />
                              </IconSection>
                              <PointSection>
                                <SubServiceBulletsText key={index}>
                                  {point}
                                </SubServiceBulletsText>
                              </PointSection>
                            </BulletsContainer>
                          ))}
                      </SubServiceBullets>
                      <SubServicePrice>
                        <SubServicePriceText>
                          {element.price}
                        </SubServicePriceText>
                      </SubServicePrice>
                    </BreakDownSection>
                  </CardServiceContainer>
                ))}
            </>
          )}
          {service == 4 && (
            <>
              <MainServiceHeader>
                <MainServiceHeading>
                  {lang === "french" ? "Soins Pratiques" : "Convenient Care"}
                </MainServiceHeading>
              </MainServiceHeader>
              {priceContent[3]["services"] != [] &&
                priceContent[3]["services"].map((element) => (
                  <CardServiceContainer>
                    <ImageSection>
                      <ImageCarousel images={element.img} />
                    </ImageSection>
                    <BreakDownSection>
                      <SubServiceHeader>
                        <SubServiceHeading>{element.name}</SubServiceHeading>
                      </SubServiceHeader>
                      <SubServiceDescription>
                        <SubServiceDescriptionText>
                          {element.desc}
                        </SubServiceDescriptionText>
                      </SubServiceDescription>
                      <SubServiceBullets>
                        {element.points &&
                          element.points.map((point, index) => (
                            <BulletsContainer>
                              <IconSection>
                                {" "}
                                <CheckCircleIcon
                                  sx={{ color: "#73CE18", height: "20px" }}
                                />
                              </IconSection>
                              <PointSection>
                                <SubServiceBulletsText key={index}>
                                  {point}
                                </SubServiceBulletsText>
                              </PointSection>
                            </BulletsContainer>
                          ))}
                      </SubServiceBullets>
                      <SubServicePrice>
                        <SubServicePriceText>
                          {element.price}
                        </SubServicePriceText>
                      </SubServicePrice>
                    </BreakDownSection>
                  </CardServiceContainer>
                ))}
            </>
          )}
        </CardContainer>
      </CardDetailContainer>
    </>
  );
};

export default ServiceDetailsCards;
