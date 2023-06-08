import { styled, css } from "styled-components";
import {
  primaryTextColor,
  secondaryTextColor,
  bodyText1,
  primaryHeadingColor,
  bodyText1Mobile,
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
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 50px;
          padding-top: 8px;
        `;

      case "side":
        return css`
          position: fixed;
          z-index: 999;
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
          width: 100%;
          display: grid;
          grid-template-columns: 40% 60%;
          height: 90vh;
          @media screen and (max-width: 501px) {
            display: flex;
            flex-direction: column;
          }
        `;
      case "div":
        return css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
        `;
      case "about":
        return css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
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
  justify-content: right;
  align-items: center;
  width: 150px;
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
            background-image: url(${splashbg});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
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
            height: 70%;
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  overflow: hidden;
  background-image: url(${splashbg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  opacity: 60%;
  @media screen and (max-width: 501px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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

export const Image = styled.img`
  width: 50%;
  height: 100%;
  opacity: 0.2;
  object-fit: cover;
`;
