import { styled, css } from "styled-components";
import {
  secondaryTextColor,
  bodyText1,
  primaryHeadingColor,
} from "../resources/colors";
import { Link as LinkR } from "react-dom";
import { Link as LinkS } from "react-scroll";
/////////Containers and Classifications////////
export const Container = styled.div`
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
    }
  }}
`;

////////////////////////////////////////

////////////// Nav Bar ////////////////
/* Start */

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  font-size: ${bodyText1};
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
