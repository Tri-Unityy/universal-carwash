import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  ApplyContentContainer,
  ApplyFormContainer,
  Container,
  SectionDiv,
  SectionHeading,
  SectionParagraph,
  TitleContainer,
} from "../assets/style/homeElements";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./../assets/style/css/apply-form.css";
import booking from "./../assets/video/booking.mp4";
const Apply = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    number: "",
    message: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    const reply_message = `Hi this is ${form.name},\n\nI wish to schedule a carwash on the following date ${form.message} within ${form.time}. Here is my phone number ${form.number} contact me upon your acceptance. \n\nBest Regards,\n\nSandra`;
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_q7xb4hl",
        "template_hse05fd",
        {
          from_name: form.name,
          user_name: form.name,
          message: reply_message,
        },
        "RwKR7-Bzx0eRH_gEw"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            customClass: {
              container: "my-swal",
            },
            position: "center",
            icon: "success",
            title: "Your request has been sent successfully",
            showConfirmButton: false,
            timer: 3000,
          });

          setForm({
            name: "",
            number: "",
            message: "",
            time: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          Swal.fire({
            position: "center",

            icon: "warning",
            title: "Something went wrong, please try again",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <SectionDiv>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: 0.5 }}
        className="bg-video"
      >
        <source src={booking} type="video/mp4" />
      </video>
      <Container $mode="apply">
        <ApplyContentContainer>
          <TitleContainer>
            <SectionHeading>Schedule a Call</SectionHeading>
            <SectionParagraph>
              Fill out this form and get in touch with us
            </SectionParagraph>
          </TitleContainer>
        </ApplyContentContainer>
        <ApplyFormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="form-container"
          >
            <Form.Group className=" form-group" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                onChange={handleChange}
                value={form.name}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className=" form-group" controlId="formNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={handleChange}
                name="number"
                value={form.number}
                placeholder="Enter Phone Number"
              />
            </Form.Group>

            <Form.Group className=" form-group" controlId="setDate">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="message"
                onChange={handleChange}
                value={form.message}
                placeholder="Schedule date"
              />
            </Form.Group>
            <Form.Group className=" form-group" controlId="setTime">
              <Form.Label>Select Time</Form.Label>
              <Form.Select
                required
                name="time"
                value={form.time}
                onChange={handleChange}
              >
                <option>Select yout time slot</option>
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

            <Button type="submit" className="button-container">
              {loading ? "Sending..." : "Send"}
            </Button>
          </Form>
        </ApplyFormContainer>
      </Container>
    </SectionDiv>
  );
};

export default Apply;
