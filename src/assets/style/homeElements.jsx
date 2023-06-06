import { styled, css } from "styled-components";
import { secondaryTextColor, bodyText1 } from "../resources/colors";
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
  width: 400px;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }
`;

// export const Icon = styled.div`
//   ${(props) => {
//     switch (props.$mode) {
//       case "menu":
//         return css`
//           display: none;
//           :hover {
//             cursor: pointer;
//             display: flex;
//           }
//         `;
//       case "segment":
//         return css`
//           display: flex;
//           :hover {
//             display: none;
//           }
//         `;
//     }
//   }}
// `;

export const Links = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  color: ${secondaryTextColor};
  text-decoration: none;
  font-size: ${bodyText1};
`;

/* End */
///////////////////////////////////////
