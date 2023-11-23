import React, { useContext, useRef, useState } from "react";
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
import { TranslatorContext } from "../screens/context/TranslatorContext";

const Apply = () => {
  const { lang } = useContext(TranslatorContext);

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
    var successmsg = "";
    var warningmsg = "";
    if (lang === "french") {
      successmsg = "Votre demande a été envoyée avec succès";
      warningmsg = "Une erreur s'est produite, veuillez réessayer";
    } else {
      successmsg = "Your request has been sent successfully";
      warningmsg = "Something went wrong, please try again";
    }
    const reply_message = `Hi this is ${form.name},\n\nI wish to schedule a carwash on the following date ${form.message} within ${form.time}. Here is my phone number ${form.number} contact me upon your acceptance. \n\nBest Regards,\n\n${form.name}`;
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
            title: successmsg,
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
            title: warningmsg,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <SectionDiv id="apply">
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
            {lang === "french" ? (
              <>
                <SectionHeading>Planifier un appel</SectionHeading>
                <SectionParagraph>
                  Contactez-nous pour plus de détails !
                </SectionParagraph>
              </>
            ) : (
              <>
                <SectionHeading>Schedule a call</SectionHeading>
                <SectionParagraph>
                  Get in touch with us for more details!
                </SectionParagraph>
              </>
            )}
          </TitleContainer>
        </ApplyContentContainer>
        <ApplyFormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="form-container"
          >
            {lang === "french" ? (
              <>
                <Form.Group className=" form-group" controlId="formName">
                  <Form.Label
                    className=" form-label"
                    style={{ marginTop: "20px" }}
                  >
                    Nom
                  </Form.Label>
                  <Form.Control
                    required
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    placeholder="Entrez votre nom"
                  />
                </Form.Group>

                <Form.Group className=" form-group" controlId="formNumber">
                  <Form.Label className=" form-label">
                    Numéro de téléphone
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="number"
                    value={form.number}
                    placeholder="Entrez votre numéro de téléphone"
                  />
                </Form.Group>

                <Form.Group className=" form-group" controlId="setDate">
                  <Form.Label className=" form-label">
                    Sélectionner la date
                  </Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="message"
                    className="form-control"
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Planifier la date"
                  />
                </Form.Group>
                <Form.Group className=" form-group" controlId="setTime">
                  <Form.Label className=" form-label">
                    Sélectionner l'heure
                  </Form.Label>
                  <Form.Select
                    required
                    name="time"
                    value={form.time}
                    className="form-control"
                    onChange={handleChange}
                  >
                    <option>Votre créneau horaire</option>
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
                  {loading ? "Planification..." : "Planifier"}
                </Button>
              </>
            ) : (
              <>
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
                    className="form-control"
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    placeholder="Enter Name"
                  />
                </Form.Group>

                <Form.Group className=" form-group" controlId="formNumber">
                  <Form.Label className=" form-label">Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="number"
                    value={form.number}
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>

                <Form.Group className=" form-group" controlId="setDate">
                  <Form.Label className=" form-label">Select Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="message"
                    className="form-control"
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Schedule date"
                  />
                </Form.Group>
                <Form.Group className=" form-group" controlId="setTime">
                  <Form.Label className=" form-label">Select Time</Form.Label>
                  <Form.Select
                    required
                    name="time"
                    value={form.time}
                    className="form-control"
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
                  {loading ? "Scheduling..." : "Schedule"}
                </Button>
              </>
            )}
          </Form>
        </ApplyFormContainer>
      </Container>
    </SectionDiv>
  );
};

export default Apply;
