import { styled, css } from "styled-components";
import { primaryHeadingColor, primaryTextColor } from "../resources/colors";
import cardbg from "../../assets/images/cardbg2.png";

export const Container = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "price":
        return css`
          padding: 10px;
          margin-top: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          width: 95%;
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

          @media screen and (max-width: 769px) {
            min-height: 100%;
          }
        `;
    }
  }}
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const PriceHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const PriceHeading = styled.h2`
  font-size: 5vw;
  color: transparent;
  -webkit-text-stroke: 0.06vw ${primaryHeadingColor};
  text-transform: uppercase;
  position: relative;

  @media screen and (max-width: 769px) {
    font-size: 10vw;
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    color: ${primaryHeadingColor};
    -webkit-text-stroke: 0.06vw ${primaryHeadingColor};
    overflow: hidden;
    border-bottom: 2px solid ${primaryHeadingColor};
  }
`;

export const PriceParagraph = styled.p`
  color: transparent;
  color: ${primaryTextColor};
  position: relative;
  bottom: 0;
  left: 0;
  padding: 5px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  padding-top: 25px;

  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;

export const Tabs = styled.div`
  display: flex;
  height: 40px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid ${primaryHeadingColor};
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${primaryHeadingColor};
    border: none;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  padding: 10px;
  background-image: url(${cardbg});
  background-size: cover;
  margin: 20px 10px 10px 10px;
  border-radius: 5px;

  &:hover {
    transition: 0.5s ease-in-out;
    box-shadow: 0px 13px 41px -1px rgba(185, 79, 79, 0.67);
    -webkit-box-shadow: 0px 13px 41px -1px rgba(185, 79, 79, 0.67);
    -moz-box-shadow: 0px 13px 41px -1px rgba(185, 79, 79, 0.67);
  }

  @media screen and (min-width: 426px) and (max-width: 769px) {
    width: 280px;
    height: 140px;
  }
`;

export const CardHeadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const CardHeading = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #e80c10;
  margin: 0 0 20px;
  opacity: 1;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 426px) and (max-width: 769px) {
    font-size: 15px;
  }

  @media screen and (max-width: 426px) {
    font-size: 15.5px;
  }
`;

export const CardContentHeading = styled.h5`
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  opacity: 1;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 426px) and (max-width: 769px) {
    font-size: 10px;
  }
`;

export const CardContentPrice = styled.h5`
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
  opacity: 1;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 426px) and (max-width: 769px) {
    font-size: 20px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const CardPrice = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CardDescription = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
