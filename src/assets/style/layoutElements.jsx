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
          width: 100vw;
          height: 100%;
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
          border: 1px solid blue;
        `;
    }
  }}
`;
