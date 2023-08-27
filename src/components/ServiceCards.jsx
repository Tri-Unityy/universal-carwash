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
      <Container $mode="price">
        <PriceContainer>
          <CardContainer>
            {service == 1 && 
              <>
              <PriceParagraph>Description</PriceParagraph>
                <Cards>
                  <CardHeadingContainer>
                <CardHeading>Leather Maintenance Wax shine (UPON REQUEST)</CardHeading>
                </CardHeadingContainer>
                  <CardContent>
                    <CardDescription>
                      <CardContentHeading>This service is provided according to  This service is provided according to the customer prefernce the customer prefernce</CardContentHeading>
                    </CardDescription>
                    <CardPrice>
                    <CardContentPrice>
                    80$
                      </CardContentPrice> 
                    </CardPrice>
                  </CardContent>
                </Cards>
                <Cards>
                  <CardHeadingContainer>
                <CardHeading>GlassMaintenance Wax shine (UPON REQUEST)</CardHeading>
                </CardHeadingContainer>
                  <CardContent>
                    <CardDescription>
                      <CardContentHeading>This service is provided according to  This service is provided according to the customer prefernce the customer prefernce</CardContentHeading>
                    </CardDescription>
                    <CardPrice>
                    <CardContentPrice>
                    90$
                      </CardContentPrice> 
                    </CardPrice>
                  </CardContent>
                </Cards>
                <Cards>Cards1</Cards>
                <Cards>Cards1</Cards>
                <Cards>Cards1</Cards>
                <Cards>Cards1</Cards>
              </>
            }
            {service == 2 && <Cards>Cards2</Cards>}
            {service == 3 && <Cards>Cards3</Cards>}
            {service == 4 && <Cards>Cards4</Cards>}
          </CardContainer>
        </PriceContainer>
      </Container>
    </>
  );
};

export default ServiceCards;
