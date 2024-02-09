import React, { useState } from "react";
import {
  ButtonContainer,
  Container,
  FormContainer,
  FormWrapper,
  Image,
  LeftContainer,
  RightContainer,
  TimeSlotContainer,
  TimeSlots,
} from "../../assets/style/bookingElements";

import "./../../assets/style/css/booking-form.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bookingPageImage from "./../../assets/images/booking.jpg"
import {  collection, getDocs } from 'firebase/firestore/lite';

const BookingPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <>
      <Container $mode="main">
        <Container $mode="left">
          <LeftContainer>
            <h1>Book an Car Appointment</h1>
            <FormContainer>
              <FormWrapper>
                <Form.Group className=" form-group" controlId="formName">
                  <Form.Label className=" form-label">Name</Form.Label>
                  <Form.Control
                    required
                    name="name"
                    className="form-control-booking"
                    type="text"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className=" form-group" controlId="formEmail">
                  <Form.Label className=" form-label">Email</Form.Label>
                  <Form.Control
                    required
                    name="email"
                    className="form-control-booking"
                    type="text"
                    placeholder="Enter Email"
                  />
                </Form.Group>
              </FormWrapper>
              <FormWrapper>
                <Form.Group className=" form-group" controlId="formNumber">
                  <Form.Label className=" form-label">Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="form-control-booking"
                    name="number"
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>

                <Form.Group className=" form-group" controlId="formAddress">
                  <Form.Label className=" form-label">Address</Form.Label>
                  <Form.Control
                    required
                    name="address"
                    className="form-control-booking"
                    type="text"
                    placeholder="Enter Address"
                  />
                </Form.Group>
              </FormWrapper>
              <FormWrapper>
                <Form.Group className=" form-group" controlId="setTime">
                  <Form.Label className=" form-label">
                    Pickup on Location
                  </Form.Label>
                  <Form.Select
                    required
                    name="location"
                    className="form-control-booking"
                    onChange={handleLocationChange}
                    value={selectedLocation}
                  >
                    <option value="">Yes/No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className=" form-group" controlId="setDate">
                  <Form.Label className=" form-label">Select Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="message"
                    className="form-control-booking"
                    placeholder="Schedule date"
                  />
                   <small
                      id="pickupdate"
                      className="form-text text-muted sub-label"
                    >
                      Once you select the date. available time slots will appear.
                    </small>
                </Form.Group>
              </FormWrapper>

              <FormWrapper>
                {selectedLocation === "yes" && (
                  <Form.Group
                    className=" form-group"
                    controlId="formPickupAddress"
                  >
                    <Form.Label className=" form-label">
                      Pickup Address
                    </Form.Label>
                    <Form.Control
                      required
                      name="address"
                      className="form-control-booking"
                      type="text"
                      placeholder="Enter Address"
                    />
                    <small
                      id="pickupaddresshelp"
                      className="form-text text-muted sub-label"
                    >
                      Minimum 50CHF. Amount will differ based on the location
                    </small>
                  </Form.Group>
                )}
              </FormWrapper>

              <TimeSlotContainer>
                <TimeSlots>09:00 am</TimeSlots>
                <TimeSlots>10:00 am</TimeSlots>
                <TimeSlots>11:00 am</TimeSlots>
                <TimeSlots>12:00 pm</TimeSlots>
                <TimeSlots>02:00 pm</TimeSlots>
                <TimeSlots>03:00 pm</TimeSlots>
                <TimeSlots>04:00 pm</TimeSlots>
                <TimeSlots>05:00 pm</TimeSlots>
              </TimeSlotContainer>
              <ButtonContainer>
              <Button style={{width:"300px" , backgroundColor:"red" , border:"none" , cursor:"pointer"}} >Confirm Booking</Button>
              </ButtonContainer>
             
            </FormContainer>
          </LeftContainer>
        </Container>
        <Container $mode="right">
          <RightContainer>
            <Image src={bookingPageImage} />
          </RightContainer>
        </Container>
      </Container>
    </>
  );
};

export default BookingPage;
