import React, { useState } from "react";
import {
  CardContainer,
  Cards,
  Container,
  PriceContainer,
  PriceHeading,
  PriceHeadingContainer,
  TabContainer,
  Tabs,
} from "../../assets/style/priceElements";
import { TranslatorContext } from "../context/TranslatorContext";
import {
  ContactDetailsFooterContainer,
  ContactFooterDetails,
} from "../../assets/style/homeElements";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import NavBarPrices from "../../components/NavBarPrices";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("french");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TranslatorContext.Provider value={{ lang, setLang }}>
        <Container $mode="price">
          <NavBarPrices toggle={toggle} />
          <PriceContainer>
            <PriceHeadingContainer>
              <PriceHeading data-text="Packages">Packages</PriceHeading>
            </PriceHeadingContainer>
            <TabContainer>
              <Tabs> Tab 1 </Tabs>
              <Tabs> Tab 1 </Tabs>
              <Tabs> Tab 1 </Tabs>
              <Tabs> Tab 1 </Tabs>
            </TabContainer>
            <CardContainer>
              <Cards>Cards</Cards>
              <Cards>Cards</Cards>
              <Cards>Cards</Cards>
              <Cards>Cards</Cards>
            </CardContainer>
          </PriceContainer>
          <ContactDetailsFooterContainer>
            <ContactFooterDetails>
              <span style={{ fontSize: "10px", color: "white" }}>
                Copyright © 2023 Universal CarWash. All Rights Reserved
              </span>
            </ContactFooterDetails>
            <ContactFooterDetails $mode="social">
              <a
                href="https://www.facebook.com/p/Universal-Car-Wash-100028020356983/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <FacebookIcon
                  sx={{ fontSize: "25px", color: "white", marginRight: "20px" }}
                />
              </a>
              <a
                href="https://instagram.com/universal_car_wash_geneva?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <InstagramIcon
                  sx={{ fontSize: "25px", color: "white", marginRight: "20px" }}
                />
              </a>
              {/* <TwitterIcon
              sx={{ fontSize: "30px", color: "white", marginRight: "20px" }}
            /> */}
            </ContactFooterDetails>
          </ContactDetailsFooterContainer>
        </Container>
      </TranslatorContext.Provider>
    </>
  );
};

export default Services;
