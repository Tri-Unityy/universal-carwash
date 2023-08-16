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
          height: 100vh;
          width: 100%;
          overflow: hidden;
          justify-content: center;
          align-items: center;
          background-color: rgb(32, 32, 32);
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0) 80%,
              rgba(0, 0, 0, 1)
            ),
            linear-gradient(
              45deg,
              black 25%,
              transparent 25%,
              transparent 75%,
              black 75%,
              black
            ),
            linear-gradient(
              45deg,
              black 25%,
              transparent 25%,
              transparent 75%,
              black 75%,
              black
            ),
            linear-gradient(to bottom, rgb(8, 8, 8), rgb(32, 32, 32));
          background-size: 100% 100%, 10px 10px, 10px 10px, 10px 5px;
          background-position: 0px 0px, 0px 0px, 5px 5px,  0px 0px;
        `;
    }
  }}
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  border: 1px solid white;
`;
