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
const Apply = () => {
  return (
    <SectionDiv>
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </ApplyFormContainer>
      </Container>
    </SectionDiv>
  );
};

export default Apply;
