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
`;

export const Logo = styled.img`
  width: 80%;
  height: 100%;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 100%;
`;

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
