import styled, { css } from "styled-components";
import { primaryColor } from "../resources/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => {
    switch (props.$mode) {
      case "main":
        return css`
          overflow-x: hidden;
          justify-items: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: ${primaryColor};

          @media screen and (max-width: 768px) {
            min-width: 95vw;
          }
        `;
      case "home":
        return css`
          display: flex;
          position: relative;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          /* overflow: hidden; */
        `;
    }
  }}
`;
