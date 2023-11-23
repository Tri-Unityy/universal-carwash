import React, { useContext } from "react";
import {
  CardContainer,
  CardHeading,
  Cards,
  Container,
  CardContent,
  PriceContainer,
  PriceHeading,
  PriceHeadingContainer,
  PriceParagraph,
  TabContainer,
  Tabs,
  CardPrice,
  CardDescription,
  CardContentHeading,
  CardHeadingContainer,
  CardContentPrice
} from "../assets/style/priceElements";

import "./../assets/style/css/cards.css";

import interior from "./../assets/images/interior.jpeg";
import Exterior from "./../assets/images/Exterior.jpeg";
import packagesE from "../constants/packageEnglish";
import packagesF from "../constants/packageFrench";
import pricesE from "../constants/priceEnglish";
import pricesF from "../constants/priceFrench";
import {
  ServiceContext,
  TranslatorContext,
} from "../screens/context/TranslatorContext";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { primaryHeadingColor, successColor } from "../assets/resources/colors";

const ServiceCards = () => {
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
      <Container $mode="price">
        <PriceContainer>
          <CardContainer>
            {service == 1 && 
              <>
              <PriceParagraph>{priceContent[0]['description'] != "" && priceContent[0]['description']}</PriceParagraph>
              { priceContent[0]['services'] != [] &&
              priceContent[0]['services'].map((element) => (
                <Cards>
                <CardHeadingContainer>
              <CardHeading>{element.name}</CardHeading>
              </CardHeadingContainer>
                <CardContent>
                  <CardDescription>
                    <CardContentHeading>{element.desc}</CardContentHeading>
                  </CardDescription>
                  <CardPrice>
                  <CardContentPrice>{element.price}</CardContentPrice> 
                  </CardPrice>
                </CardContent>
              </Cards>
              ))}
              </>
            }
            {service == 2 && 
            <>
            <PriceParagraph>{priceContent[1]['description'] != "" && priceContent[1]['description']}</PriceParagraph>
            { priceContent[1]['services'] != [] &&
            priceContent[1]['services'].map((element) => (
              <Cards>
              <CardHeadingContainer>
            <CardHeading>{element.name}</CardHeading>
            </CardHeadingContainer>
              <CardContent>
                <CardDescription>
                  <CardContentHeading>{element.desc}</CardContentHeading>
                </CardDescription>
                <CardPrice>
                <CardContentPrice>{element.price}</CardContentPrice> 
                </CardPrice>
              </CardContent>
            </Cards>
            ))}
            </>
            }
            {service == 3 && 
            <>
            <PriceParagraph>{priceContent[2]['description'] != "" && priceContent[2]['description']}</PriceParagraph>
            { priceContent[2]['services'] != [] &&
            priceContent[2]['services'].map((element) => (
              <Cards>
              <CardHeadingContainer>
            <CardHeading>{element.name}</CardHeading>
            </CardHeadingContainer>
              <CardContent>
                <CardDescription>
                  <CardContentHeading>{element.desc}</CardContentHeading>
                </CardDescription>
                <CardPrice>
                <CardContentPrice>{element.price}</CardContentPrice> 
                </CardPrice>
              </CardContent>
            </Cards>
            ))}
            </>
            }
            {service == 4 && 
            <>
            <PriceParagraph>{priceContent[3]['description'] != "" && priceContent[3]['description']}</PriceParagraph>
            { priceContent[3]['services'] != [] &&
            priceContent[3]['services'].map((element) => (
              <Cards>
              <CardHeadingContainer>
            <CardHeading>{element.name}</CardHeading>
            </CardHeadingContainer>
              <CardContent>
                <CardDescription>
                  <CardContentHeading>{element.desc}</CardContentHeading>
                </CardDescription>
                <CardPrice>
                <CardContentPrice>{element.price}</CardContentPrice> 
                </CardPrice>
              </CardContent>
            </Cards>
            ))}
            </>
            }
          </CardContainer>
        </PriceContainer>
      </Container>
    </>
  );
};

export default ServiceCards;
