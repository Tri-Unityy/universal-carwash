import React,{useContext} from "react";
import {
  ContactDetails,
  ContactFooterDetails,
  ContactDetailsContainer,
  ContactDetailsFooterContainer,
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
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import MapIcon from "@mui/icons-material/Map";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import logo from "./../assets/images/logo.png";
import { TranslatorContext } from "../screens/context/TranslatorContext";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const ContactUs = () => {
  const { lang } = useContext(TranslatorContext);
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
  {lang === "french" ? "Lundi - Dimanche" : "Monday - Sunday"}
  <br />
  <span style={{ color: "#E80C0E" }}>9:00 AM - 9:00 PM</span>
</ContactDetailsParagraph>
            </Details>
          </ContactDetails>
        </ContactDetailsContainer>
        <ContactDetailsFooterContainer>
        <ContactFooterDetails style={{flex:3, justifyContent:'flex-start'}}><p style={{fontSize:'10px',color:'white'}}>Copyright © 2023 Universal CarWash. All Rights Reserved</p></ContactFooterDetails>
          <ContactFooterDetails style={{flex:1,justifyContent:'flex-end'}}>
              <InstagramIcon sx={{ fontSize: "20px",color:'white',marginRight:'10px' }} />
              <FacebookIcon sx={{ fontSize: "20px" ,color:'white',marginRight:'10px' }} />
              <TwitterIcon sx={{ fontSize: "20px",color:'white' ,marginRight:'10px' }} />
          </ContactFooterDetails>
        </ContactDetailsFooterContainer>
      </Container>
    </SectionDiv>
  );
};

export default ContactUs;
