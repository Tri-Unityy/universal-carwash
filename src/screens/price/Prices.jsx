import React from "react";
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

const Prices = () => {
  return (
    <>
      <Container $mode="price">
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
      </Container>
    </>
  );
};

export default Prices;
