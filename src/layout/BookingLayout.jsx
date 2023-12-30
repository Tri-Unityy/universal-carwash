import React from "react";
import { Container } from "../assets/style/layoutElements";
import Booking from "../screens/booking/Booking";

const BookingLayout = () => {
  return (
    <Container $mode="home">
      <Booking />
    </Container>
  );
};

export default BookingLayout;
