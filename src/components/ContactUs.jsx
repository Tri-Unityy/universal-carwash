import React from "react";
import { ContactMapContainer, Container } from "../assets/style/homeElements";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const ContactUs = () => {
  return (
    <Container $mode="contact">
      {/* <ContactMapContainer>
        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[44.96366, 19.61045]}>
            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </ContactMapContainer> */}
    </Container>
  );
};

export default ContactUs;
