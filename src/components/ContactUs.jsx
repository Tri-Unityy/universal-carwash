import React from "react";
import {
  ContactDetails,
  ContactDetailsContainer,
  ContactDetailsParagraph,
  ContactLogo,
  ContactMapContainer,
  Container,
  Details,
  SectionDiv,
  SectionHeading,
  TimeTable,
  TimeTableContents,
} from "../assets/style/homeElements";

import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import MapIcon from "@mui/icons-material/Map";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import logo from "./../assets/images/logo.png";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const ContactUs = () => {
  return (
    <SectionDiv id="contactus">
      <SectionHeading>Get in Touch</SectionHeading>
      <Container $mode="contact">
        <ContactLogo src={logo} />
        <ContactDetailsContainer>
          <ContactDetails>
            <Details>
              <CallIcon sx={{ fontSize: "30px" }} />
              <ContactDetailsParagraph>0793270036</ContactDetailsParagraph>
            </Details>
            <Details>
              <EmailIcon sx={{ fontSize: "30px" }} />
              <ContactDetailsParagraph>
                info@universalcarwash.ch
              </ContactDetailsParagraph>
            </Details>
            <Details>
              <MapIcon sx={{ fontSize: "30px" }} />
              <ContactDetailsParagraph>
                Route de Saint-Georges 77 -1213 Petit-Lancy
              </ContactDetailsParagraph>
            </Details>
            <Details>
              <QueryBuilderIcon sx={{ fontSize: "30px" }} />
              <ContactDetailsParagraph>
                Monday - Sunday <br />{" "}
                <span style={{ color: "#E80C0E" }}> 9:00 AM - 9:00 PM </span>
              </ContactDetailsParagraph>
            </Details>
          </ContactDetails>
        </ContactDetailsContainer>
      </Container>
    </SectionDiv>
  );
};

export default ContactUs;
