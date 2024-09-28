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

import emailjs from "@emailjs/browser"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bookingPageImage from "./../../assets/images/booking.jpg";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
  addDoc,
} from "firebase/firestore/lite"; // Import required Firestore modules
import { db } from "./../../utils/firebase.config";
import Swal from "sweetalert2";

const BookingPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]); // State to store available time slots
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [isBookingEnabled, setIsBookingEnabled] = useState(false);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleTimeSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
    setIsBookingEnabled(true);
  };

  const handleDateChange = async (event) => {
    const date = event.target.value;
    setSelectedDate(date); // Update selectedDate state
    const selectedDate = new Date(date);
    // Query Firestore to get bookings for the selected date
    const bookingsRef = collection(db, "universal-carwash-booking");
    const q = query(bookingsRef, where("date", "==", date)); // Assuming 'date' field in Firestore is stored in YYYY-MM-DD format
    const querySnapshot = await getDocs(q);

    const bookedTimeSlots = [];
    querySnapshot.forEach((doc) => {
      bookedTimeSlots.push(doc.data().timeslot);
    });

    // Generating available time slots
    const allTimeSlots = [
      "09:00AM",
      "09:30AM",
      "10:00AM",
      "10:30AM",
      "11:00AM",
      "11:30AM",
      "12:00PM",
      "12:30PM",
      "01:00PM",
      "01:30PM",
      "02:00PM",
      "02:30PM",
      "03:00PM",
      "03:30PM",
      "04:00PM",
      "04:30PM",
      "05:00PM",
      "05:30PM",
      "06:00PM",
      "06:30PM",
    ]; // Assuming these are the available time slots

    const availableSlots = allTimeSlots.filter(
      (slot) => !bookedTimeSlots.includes(slot)
    );
    setAvailableTimeSlots(availableSlots);
    setIsBookingEnabled(false);
  };

  const handleConfirmBooking = async () => {
    // Construct the booking object
    const bookingData = {
      name: document.getElementsByName("name")[0].value,
      email: document.getElementsByName("email")[0].value,
      phone: document.getElementsByName("number")[0].value,
      address: document.getElementsByName("address")[0].value,
      carnumber: document.getElementsByName("carnumber")[0].value,
      carmodel: document.getElementsByName("carmodel")[0].value,
      pickup: selectedLocation === "yes" ? true : false,
      pickupAddress:
        selectedLocation === "yes"
          ? document.getElementsByName("address")[1].value
          : "",
      date: selectedDate,
      timeslot: selectedTimeSlot,
    };
    console.log(bookingData);



    try {
      // Add the booking data to Firestore
      const docRef = await addDoc(
        collection(db, "universal-carwash-booking"),
        bookingData
      );
      console.log("Booking added with ID: ", docRef.id);

      const reply_message = `Hi this is ${bookingData.name},\n\nI wish to schedule a carwash on the following date ${bookingData.date} within ${bookingData.timeslot}. Here is my phone number ${bookingData.phone} contact me upon your acceptance. These below are the other details\n\n Vehicle Number - ${bookingData.carnumber} \n\nVehicle Model - ${bookingData.carmodel} \n\nAddress - ${bookingData.address} \n\n Email - ${bookingData.email} \n\nPickup on location - ${bookingData.pickup} \n\nPickup Address - ${bookingData.pickupAddress}   \n\nBest Regards,\n\n${bookingData.name}`;

      emailjs
        .send(
          "service_q7xb4hl",
          "template_15t48uy",
          {
            from_name: bookingData.name,
            user_name: bookingData.name,
            message: reply_message,
          },
          "RwKR7-Bzx0eRH_gEw"
        )
      
      Swal.fire({
        icon: 'success',
        title: 'Booking Successful!',
        text: 'Your booking has been confirmed.',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          
          console.log(bookingData.name);
          window.location.reload(); // Reload the page
        }
      });
    } catch (e) {
      console.error("Error adding booking: ", e);
      // You may want to show an error message to the user
    }
  };
  return (
    <>
      <Container $mode="main">
        <Container $mode="left">
          <LeftContainer>
            <h1>Book an Appointment</h1>
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
                <Form.Group className=" form-group" controlId="carnumber">
                  <Form.Label className=" form-label">Vehicle Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="form-control-booking"
                    name="carnumber"
                    placeholder="Enter Vehicle Number"
                  />
                </Form.Group>

                <Form.Group className=" form-group" controlId="carmodel">
                  <Form.Label className=" form-label">Vehicle Model</Form.Label>
                  <Form.Control
                    required
                    name="carmodel"
                    className="form-control-booking"
                    type="text"
                    placeholder="Enter Vehicle Model"
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
                    onChange={handleDateChange}
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
                {/* Display available time slots */}
                {availableTimeSlots.map((slot) => (
                  <TimeSlots
                    key={slot}
                    onClick={() => handleTimeSlotClick(slot)}
                    selected={selectedTimeSlot === slot}
                  >
                    {slot}
                  </TimeSlots>
                ))}
              </TimeSlotContainer>
              <ButtonContainer>
                <Button
                  type="button"
                  style={{
                    width: "300px",
                    backgroundColor: "red",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleConfirmBooking} // Call handleConfirmBooking when button is clicked
                  disabled={!isBookingEnabled}
                >
                  Confirm Booking
                </Button>
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
