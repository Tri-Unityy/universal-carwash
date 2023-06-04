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
          background-color: #fff;
        `;
    }
  }}
`;
