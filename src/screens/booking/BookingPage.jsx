import React, { useState } from "react";
import {
  Container,
  FormContainer,
  LeftContainer
} from "../../assets/style/bookingElements";

import "./../../assets/style/css/booking-form.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BookingPage = () => {

  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <>
      <Container $mode="main">
        <Container $mode="left">
          <LeftContainer>
            <FormContainer>
              <Form.Group className=" form-group" controlId="formName">
                <Form.Label
                  className=" form-label"
               
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
              <Form.Group className=" form-group" controlId="formEmail">
                <Form.Label
                  className=" form-label"
               
                >
                  Email
                </Form.Label>
                <Form.Control
                  required
                  name="email"
                  className="form-control-booking"
                  type="text"
                  placeholder="Enter Email"
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

              <Form.Group className=" form-group" controlId="formAddress">
                <Form.Label
                  className=" form-label"
               
                >
                  Address
                </Form.Label>
                <Form.Control
                  required
                  name="address"
                  className="form-control-booking"
                  type="text"
                  placeholder="Enter Address"
                />
              </Form.Group>

              <Form.Group className=" form-group" controlId="setTime">
                <Form.Label className=" form-label">Pickup on Location</Form.Label>
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
              </Form.Group>

              {selectedLocation === 'yes' && (
                <Form.Group className=" form-group" controlId="formPickupAddress">
                  <Form.Label className=" form-label">Pickup Address</Form.Label>
                  <Form.Control
                    required
                    name="address"
                    className="form-control-booking"
                    type="text"
                    placeholder="Enter Address"
                  />
                  <small id="pickupaddresshelp" className="form-text text-muted sub-label">
                    Minimum 50CHF. Amount will differ based on the location
                  </small>
                </Form.Group>
              )}
              
             
            </FormContainer>
          </LeftContainer>
        </Container>
        <Container $mode="right">right</Container>
      </Container>
    </>
  );
};

export default BookingPage;
