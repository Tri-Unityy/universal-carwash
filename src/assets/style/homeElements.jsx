import { styled } from "styled-components";

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
        `;
    }
  }}
`;

////////////////////////////////////////

////////////// Nav Bar ////////////////
/* Start */

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
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

/* End */
///////////////////////////////////////
