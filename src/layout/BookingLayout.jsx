import React from "react";
import { Container } from "../assets/style/layoutElements";
import BookingPage from "../screens/booking/BookingPage";
const BookingLayout = () => {
  return (
    <Container $mode="home">
      <BookingPage />
    </Container>
  );
};

export default BookingLayout;
