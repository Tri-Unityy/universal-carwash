import React from "react";
import {
  Container,
  FormContainer,
  FormFields,
  InputField,
  Label,
  LeftContainer,
  Option,
  SelectField,
} from "../../assets/style/bookingElements";

import "./../../assets/style/css/booking-form.css"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BookingPage = () => {
  return (
    <>
      <Container $mode="main">
        <Container $mode="left">
          <LeftContainer>
            <FormContainer>
            <Form.Group className=" form-group" controlId="formName">
                  <Form.Label
                    className=" form-label"
                    style={{ marginTop: "20px" }}
                  >
                    Name
                  </Form.Label>
                  <Form.Control
                    required
                    name="name"
                    className="form-control-booking"
                  
                    type="text"
                    placeholder="Enter Name"
                  />
                </Form.Group>

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

                <Form.Group className=" form-group" controlId="setDate">
                  <Form.Label className=" form-label">Select Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="message"
                    className="form-control-booking"
                    
                    placeholder="Schedule date"
                  />
                </Form.Group>
                <Form.Group className=" form-group" controlId="setTime">
                  <Form.Label className=" form-label">Select Time</Form.Label>
                  <Form.Select
                    required
                    name="time"
                   
                    className="form-control-booking"
                  
                  >
                    <option>Select your time slot</option>
                    <option value="09 am - 10 am">09 am - 10 am</option>
                    <option value="10 am - 11 am">10 am - 11 am</option>
                    <option value="11 am - 12 pm">11 am - 12 pm</option>
                    <option value="12 pm - 13 pm">12 pm - 13 pm</option>
                    <option value="13 pm - 14 pm">13 pm - 14 pm</option>
                    <option value="14 pm - 15 pm">14 pm - 15 pm</option>
                    <option value="15 pm - 16 pm">15 pm - 16 pm</option>
                    <option value="16 pm - 17 pm">16 pm - 17 pm</option>
                    <option value="17 pm - 18 pm">17 pm - 18 pm</option>
                  </Form.Select>
                </Form.Group>
            </FormContainer>
          </LeftContainer>
        </Container>
        <Container $mode="right">right</Container>
      </Container>
    </>
  );
};

export default BookingPage;
