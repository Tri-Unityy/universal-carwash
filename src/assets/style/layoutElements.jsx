import styled, { css } from "styled-components";
import { primaryColor } from "../resources/colors";

export const Container = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "main":
        return css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 95vw;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: ${primaryColor};

          @media screen and (max-width: 768px) {
            min-width: 95vw;
          }
        `;
      case "home":
        return css`
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `;
    }
  }}
`;
