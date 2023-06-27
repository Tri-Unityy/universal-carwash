import React from "react";
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
          <Form className="form-container">
            <Form.Group className=" form-group" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className=" form-group" controlId="formNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="email" placeholder="Enter Phone Number" />
            </Form.Group>

            <Form.Group className=" form-group" controlId="setDate">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="setDate"
                placeholder="Date of Birth"
              />
            </Form.Group>

            <Button type="submit" className="button-container">
              Submit
            </Button>
          </Form>
        </ApplyFormContainer>
      </Container>
    </SectionDiv>
  );
};

export default Apply;
