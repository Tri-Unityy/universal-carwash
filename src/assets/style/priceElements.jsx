import { styled, css } from "styled-components";
import {
  primaryTextColor,
  secondaryTextColor,
  bodyText1,
  primaryHeadingColor,
  bodyText1Mobile,
  sectionText1,
} from "../resources/colors";

export const Container = styled.section`
  ${(props) => {
    switch (props.$mode) {
      case "price":
        return css`
          display: flex;
          flex-direction: column;
          background-image: url("");
        `;
    }
  }}
`;
