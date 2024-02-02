import { TranslatorContext } from "../screens/context/TranslatorContext";
import {
    Container,
    Heading, 
    SectionDiv, SectionParagraph, SubHeading
  } from "../assets/style/homeElements";

import "../assets/style/css/booknow.css"

import { useContext } from "react";
import { ArrowCircleRightOutlined, ArrowForwardRounded } from "@mui/icons-material";

const BookNow = () => {
    
    const { lang } = useContext(TranslatorContext);

    return(
        <SectionDiv $mode="booknow" id="booknow">
            <Container $mode="booknow" style={{justifyContent:"center", alignItems:"center"}}>
                <SectionParagraph $mode="booknow">
                    <Heading $mode="booknow">Join with us for a seamless vehicle service</Heading>
                </SectionParagraph>
                <SectionParagraph $mode="booknow">
                    <a className="booknow-button" href="/booking" target="_blank">
                        {lang === "french" ? " Réservez maintenant" : "Book Now"}
                        <ArrowCircleRightOutlined fontSize="large"/>
                    </a>
                </SectionParagraph>
            </Container>
        </SectionDiv>
    );
};

export default BookNow;