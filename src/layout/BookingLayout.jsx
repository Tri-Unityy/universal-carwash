import React from "react";
import { Container } from "../assets/style/layoutElements";
import Booking from "../screens/booking/booking";

const BookingLayout = () => {
  return (
    <Container $mode="main">
      <Booking />
    </Container>
  );
};

export default BookingLayout;
