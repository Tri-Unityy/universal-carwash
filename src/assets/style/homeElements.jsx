import { styled, css } from "styled-components";
import {
  primaryTextColor,
  secondaryTextColor,
  bodyText1,
  primaryHeadingColor,
  bodyText1Mobile,
  sectionText1,
} from "../resources/colors";
import { Link as LinkR } from "react-dom";
import { Link as LinkS } from "react-scroll";

import splashbg from "./../images/splash.jpg";
import aboutbg from "./../images/about.jpg";

/////////Containers and Classifications////////
export const Container = styled.section`
  ${(props) => {
    switch (props.$mode) {
      case "nav":
        return css`
          top: 0;
          position: absolute;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          height: 50px;
          padding-top: 8px;
          z-index: 11111111;

          @media screen and (max-width: 768px) {
            left: 0;
            width: 100%;
          }
        `;

      case "side":
        return css`
          position: fixed;
          z-index: 999999999999999999;
          width: 100%;
          height: 100%;
          background: #0d0d0d;
          display: grid;
          align-items: center;
          top: 0;
          left: 0;
          transition: 0.3s ease-in-out;
          opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
          top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
        `;

      case "splash":
        return css`
          margin-top: 70px;
          display: flex;
          width: 90%;
          z-index: 10000;
          height: 90vh;
          margin-bottom: 2rem;
          justify-content: center;
          @media screen and (max-width: 501px) {
            display: flex;
            flex-direction: column-reverse;
          }
        `;
      case "div":
        return css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 50%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          @media screen and (max-width: 501px) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
          }
        `;

      case "services":
        return css`
          display: flex;
          flex-direction: column;
          width: 90%;
          height: 80vh;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        `;

      case "packages":
        return css`
          position: relative;
          display: flex;
          flex-direction: row;
          width: 90%;
          height: 100%;
          justify-content: space-evenly;
          align-items: center;
          background-color: transparent;
          border-radius: 5px;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          @media screen and (max-width: 376px) {
            width: 95%;
          }
        `;

      case "slider":
        return css`
          display: grid;
          grid-template-columns: 70% 30%;
          width: 100%;
          height: 100%;

          @media screen and (max-width: 769px) {
            display: flex;
            flex-direction: column;
          }
        `;

      case "gallery":
        return css`
          display: flex;
          flex-direction: column;
          width: 90%;
          height: 100%;
          background-color: transparent;
          justify-content: right;
          align-items: flex-end;
          margin-bottom: 2rem;
          margin-top: 2rem;
        `;

      case "apply":
        return css`
          display: grid;
          grid-template-columns: 70% 30%;
          width: 100%;
          height: 80vh;
          padding-right: 2rem;

          @media screen and (max-width: 1025px) {
            height: 90vh;
            grid-template-columns: 60% 40%;
          }

          @media screen and (max-width: 769px) {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            align-items: center;
            padding: 0;
          }
        `;

      case "contact":
        return css`
          position: relative;
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90%;
          height: 100%;
        `;
    }
  }}
`;

export const SectionDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  overflow: hidden;

  ${(props) => {
    switch (props.$mode) {
      case "about":
        return css`
          /* background-color: rgba(255, 255, 255, 0.2); */
        `;
      case "gallery":
        return css`
          background-color: #fff;
        `;

      case "slider":
        return css`
          margin: 0;
          justify-content: space-between;
          align-items: center;
        `;
    }
  }}
`;

export const SectionHeading = styled.h1`
  font-size: 3rem;
  color: ${primaryHeadingColor};
  margin-bottom: 1rem;
  font-weight: 700;
  ${(props) => {
    switch (props.$mode) {
      case "gallery":
        return css`
          margin-right: 1rem;
        `;
    }
  }}
`;

export const SectionParagraph = styled.p`
  font-size: ${sectionText1};
  color: ${secondaryTextColor};
  margin-bottom: 1rem;
  font-weight: 400;
  text-align: justify;

  @media screen and (max-width: 376px) {
    text-align: justify;
  }

  ${(props) => {
    switch (props.$mode) {
      case "aboutus":
        return css`
          text-align: left;
          @media screen and (max-width: 769px) {
            text-align: justify;
          }
        `;
      case "services":
        return css`
          text-align: left;
          @media screen and (max-width: 769px) {
            text-align: justify;
          }
        `;
      case "gallery":
        return css`
          color: #000;
        `;
    }
  }}

  @media screen and (max-width: 769px) {
    text-align: justify;
  }

  @media screen and (max-width: 376px) {
    text-align: start;
  }
`;

export const CommonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${(props) => {
    switch (props.$mode) {
      case "row":
        return css`
          width: 100%;
          display: flex;
          flex-direction: row;
        `;
    }
  }}
`;
////////////////////////////////////////

////////////// Nav Bar ////////////////
/* Start */

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 200px;
  height: 100%;

  @media screen and (max-width: 768px) {
    justify-content: left;
  }
`;

export const Logo = styled.img`
  width: 80%;
  height: 100%;

  @media screen and (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    ${(props) => {
      switch (props.$mode) {
        case "nav":
          return css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 100%;

            &:hover {
              cursor: pointer;
            }
          `;
        case "side":
          return css`
            display: flex;
            position: absolute;
            top: 1.2rem;
            right: 0.8rem;
            background: transparent;
            font-size: 2rem;
            cursor: pointer;
            outline: none;
          `;
      }
    }}
  }
`;

export const Links = styled(LinkS)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  color: ${secondaryTextColor};
  text-decoration: none;
  font-size: ${bodyText1};
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${primaryHeadingColor};
  }

  &:hover {
    color: ${primaryHeadingColor};
    transition: 0.2s ease-in-out;
  }
`;

export const TranslatorButtonIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 1rem;
`;

/* End */
///////////////////////////////////////

////////////// Side Bar ////////////////
/* Start */
export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${bodyText1Mobile};
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${secondaryTextColor};
  cursor: pointer;

  &:hover {
    color: ${primaryHeadingColor};
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

/////////////////Splash//////////////////////
/* Start */

export const ContentContainer = styled.div`
  display: flex;

  ${(props) => {
    switch (props.$mode) {
      case "outer":
        return css`
          flex-direction: column-reverse;
          justify-content: baseline;
          align-items: flex-start;
          @media screen and (max-width: 501px) {
            height: 100%;
          }
        `;
      case "inner":
        return css`
          width: 100%;
          height: 70%;
          flex-direction: column;
          justify-content: space-between;
          align-items: start;
          @media screen and (max-width: 501px) {
            height: 100%;
          }
        `;
    }
  }}
`;

export const Heading = styled.h1`
  z-index: 1;
  font-size: 4rem;
  color: ${primaryHeadingColor};
  margin-bottom: 1rem;
  font-weight: 800;
`;

export const SubHeading = styled.h2`
  z-index: 1;

  font-size: 3rem;
  color: ${secondaryTextColor};
  margin-bottom: 1rem;
  font-weight: 400;
`;

// export const ImageContainer = styled.div`
//   display: flex;
//   justify-content: right;
//   align-items: center;
//   overflow: hidden;
//   background-image: url(${splashbg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   width: 100%;
//   opacity: 60%;
//   @media screen and (max-width: 501px) {
//     display: none;
//   }
// `;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* @media screen and (max-width: 501px) {
    margin-top: 2rem;
  } */
`;

export const Button = styled(LinkS)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  background: ${primaryHeadingColor};
  color: ${primaryTextColor};
  border-radius: 5px;
  font-size: ${bodyText1};
  text-decoration: none;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    background: ${secondaryTextColor};
    color: ${primaryHeadingColor};
    transition: 0.2s ease-in-out;
  }
`;

////////////////////////About///////////////////////////
/* Start */

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.2); */
  margin-left: 2rem;
  @media screen and (max-width: 376px) {
    width: 100%;
    align-items: flex-start;
    /* padding-left: 1rem; */
  }

  @media screen and (max-width: 769px) {
    padding-left: 0rem;
    margin: 0;
  }
`;

export const AboutParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

////////////////////////Services///////////////////////////////
/* Start */

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 95%;
  height: 60%;
  background-color: transparent;
  overflow: hidden;
  @media screen and (max-width: 376px) {
    padding-left: 1rem;
  }
`;

export const ServicesParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: transparent;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 426px) {
    width: 100%;
  }
`;

export const ServicesImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 769px) {
  }
`;

export const ServicesImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  /* background-color: rgba(255, 255, 255, 0.1); */
  border-radius: 5px;
  margin-bottom: 1rem;
  :hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

//////////////////////// Slider ///////////////////////////////
/* Start */

export const SliderContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s linear;
  border-radius: 10px;

  ${(props) => {
    switch (props.$mode) {
      case "activeSlide":
        return css`
          opacity: 1;
          transform: translateX(0);
        `;
      case "lastSlide":
        return css`
          transform: translateX(-100%);
        `;
      case "nextSlide":
        return css`
          transform: translateX(100%);
        `;
    }
  }};
`;

export const SliderImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderContentContainer = styled.div`
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  @media screen and (max-width: 769px) {
    border-radius: 10px;
  }
`;

export const SliderContentInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 80%;
  height: 80%;
  background-color: transparent;
  overflow: hidden;
  @media screen and (max-width: 376px) {
    width: 90%;
  }
`;

export const SliderHeading = styled.h1`
  font-size: 2.5rem;
  color: ${primaryHeadingColor};
  margin-bottom: 1rem;
  font-weight: 800;

  @media screen and (max-width: 321px) {
    font-size: 1.5rem;
  }
`;

export const SliderText = styled.p`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 400;

  @media screen and (max-width: 321px) {
    font-size: 1rem;
  }

  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return css`
          display: flex;
          align-items: center;
          column-gap: 0.5rem;

          font-weight: bold;
        `;
      case "list":
        return css`
          display: flex;
          align-items: center;
          font-size: 1rem;
          column-gap: 0.5rem;
        `;
    }
  }};
`;

///////////////////////// Gallery /////////////////////////
/* Start */

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: transparent;
  overflow: hidden;
  @media screen and (max-width: 426px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 40%;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.2); */
  overflow-y: auto;

  @media screen and (max-width: 376px) {
    padding-left: 1rem;
  }
`;

export const GalleryImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  overflow: hidden;
`;

///////////////////////// Apply ///////////////////////////
/* Start */
export const ApplyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1000000;

  overflow: hidden;
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
`;

export const ApplyFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  overflow: hidden;
  border-radius: 8px;
  z-index: 1000000;
`;

///////////////////////// Contact /////////////////////////
/* Start */

export const ContactMapContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  margin-top: 2rem;
`;

export const ContactDetailsFooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 2rem;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ContactFooterDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 20%;
  color: ${primaryHeadingColor};

  @media screen and (max-width: 769px) {
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
  }
`;

export const TimeTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-items: flex-end;
  width: 30%;
  height: 100%;
`;

export const TimeTableContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 80%;
  width: 100%;
  color: ${primaryHeadingColor};
  background-color: #fff;
  border-radius: 8px;
  padding-left: 1rem;
`;

export const ContactDetailsParagraph = styled.p`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;

  @media screen and (max-width: 769px) {
    text-align: left;
    width: 90%;
    margin-left: 1.5rem;
  }

  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return css`
          color: #000;
        `;
    }
  }};
`;

export const ContactLogo = styled.img`
  width: 15%;
  height: auto;

  @media screen and (max-width: 769px) {
    width: 30%;
  }
  @media screen and (max-width: 426px) {
    width: 40%;
  }
  @media screen and (max-width: 376px) {
    width: 50%;
  }
`;
