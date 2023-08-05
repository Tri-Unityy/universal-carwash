import React, { useContext } from "react";
import {
  ContactDetails,
  ContactFooterDetails,
  ContactDetailsContainer,
  ContactDetailsFooterContainer,
  ContactDetailsParagraph,
  ContactLogo,
  Container,
  Details,
  SectionDiv,
  SectionHeading,
} from "../assets/style/homeElements";
import { secondaryTextColor } from "../assets/resources/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MapIcon from "@mui/icons-material/Map";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import logo from "./../assets/images/logo.png";
import { TranslatorContext } from "../screens/context/TranslatorContext";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const ContactUs = () => {
  const { lang } = useContext(TranslatorContext);
  
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45247697.713661395!2d-36.07109960000001!3d46.19652230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6589f543269b%3A0x995b5cc59a3e23a2!2sUniversal%20Car%20Wash%20S%C3%A0rl!5e0!3m2!1sen!2slk!4v1690616180903!5m2!1sen!2slk" width="300" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  function Iframe(props) {
    return (<div className="FooterMap" dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

  return (
    <SectionDiv $mode="contactus" id="contactus">
      <SectionHeading $mode="contactus">
        {lang === "french" ? "Contactez-nous" : "Get in Touch"}
      </SectionHeading>
      <Container $mode="contact">
        <ContactLogo src={logo} />
        <ContactDetailsContainer>
          <ContactDetails>
            <Details>
              <CallIcon sx={{ fontSize: "30px" }} />
              <ContactDetailsParagraph>
                <a href="tel:+41793270036" style={{textDecoration:"none", color: secondaryTextColor}}>
                  +41793270036
                </a>
              </ContactDetailsParagraph>
            </Details>
            <Details>
              <EmailIcon sx={{ fontSize: "30px" }} />
              <ContactDetailsParagraph>
                <a href="mailto:info@universalcarwash.ch" style={{textDecoration:"none", color: secondaryTextColor}}>
                  info@universalcarwash.ch
                </a>
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
                <span style={{ color: "#E80C0E" }}>9:00 AM - 7:30 PM</span>
              </ContactDetailsParagraph>
            </Details>
          </ContactDetails>
        </ContactDetailsContainer>
        <Iframe iframe={iframe} />
        <ContactDetailsFooterContainer>
          <ContactFooterDetails>
            <span style={{ fontSize: "10px", color: "white" }}>
              Copyright © 2023 Universal CarWash. All Rights Reserved
            </span>
          </ContactFooterDetails>
          <ContactFooterDetails $mode="social">
            <a href="https://www.facebook.com/p/Universal-Car-Wash-100028020356983/" target="_blank" 
            style={{textDecoration:"none"}}>
              <FacebookIcon
                sx={{ fontSize: "30px", color: "white", marginRight: "20px" }}
              />
            </a>
            <InstagramIcon
              sx={{ fontSize: "30px", color: "white", marginRight: "20px" }}
            />
            {/* <TwitterIcon
              sx={{ fontSize: "30px", color: "white", marginRight: "20px" }}
            /> */}
          </ContactFooterDetails>
        </ContactDetailsFooterContainer>
      </Container>
    </SectionDiv>
  );
};

export default ContactUs;
