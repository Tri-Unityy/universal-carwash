import React from "react";
import { Container, LeftContainer } from "../../assets/style/bookingElements";

const BookingPage = () => {
  return (
    <>
   <Container $mode ="main" >
    <Container $mode="left">
      <LeftContainer>
        Left
      </LeftContainer>
    </Container>
    <Container $mode="right">right</Container>
   </Container>
    </>
  );
};

export default BookingPage;
