import styled, { css } from "styled-components";
import { primaryColor } from "../resources/colors";

export const Container = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "main":
        return css`
          display: flex;
          flex-direction: column;
          min-width: 90vw;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: ${primaryColor};

          @media screen and (max-width: 768px) {
            min-width: 95vw;
          }
        `;
    }
  }}
`;
