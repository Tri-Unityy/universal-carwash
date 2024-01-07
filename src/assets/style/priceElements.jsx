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

export const CardDetailContainer = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "detail":
        return css`
          padding: 10px;
          margin-top: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          width: 100%;
          justify-content: center;
          align-items: center;

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
  margin: 20px 10px 10px 10px;

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

export const CardServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 550px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px; 
  margin: 20px auto;

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
  @media screen and (min-width: 769px) and (max-width: 1025px) {
    height: 450px;
  }
  @media screen and (min-width: 426px) and (max-width: 769px) {
    height: 650px;
  }
  @media screen and (min-width: 376px) and (max-width: 426px) {
    height: 500px;
  }
  @media screen and (min-width: 321px) and (max-width: 376px) {
    height: 500px;
  }
  @media screen and (max-width: 321px) {
    height: 450px;
  }
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

export const DetailsCards = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 20px 10px 10px 10px;
  border-radius: 5px;


  @media screen and (min-width: 426px) and (max-width: 769px) {
    width: 280px;
    height: 140px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 100%;
`;

export const CarouselContent1 = styled.div`
display: flex;
align-items: center;
  justify-content: center;
  height: 100%;
  flex:1;
`;

export const CarouselContent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex:8;
`;

export const MainServiceHeading = styled.h1`
  font-weight: 600;
  font-size:60px;
  color: #E80C0E;
  opacity: 1;
  text-align:center;

  @media screen and (min-width: 769px) and (max-width: 1025px) {
    font-size: 50px;
  }
  @media screen and (min-width: 426px) and (max-width: 769px) {
    font-size: 40px;
  }
  @media screen and (max-width: 426px) {
    font-size: 30px;
  }
`;

export const CarouselContent = styled.div`
  display: flex;
  flex-direction:column;
  flex:1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainServiceHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  align-items:center;
  @media screen and (min-width: 769px) and (max-width: 1025px) {
    height: 120px;
  }
  @media screen and (min-width: 426px) and (max-width: 769px) {
    height: 100px;
  }
  @media screen and (max-width: 426px) {
    height: 80px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  background-color: #252525;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 426px) and (max-width: 769px) {
    flex: 1.5;
  }
  @media screen and (min-width: 376px) and (max-width: 426px) {
    flex: 0.8;
  }
  @media screen and (min-width: 321px) and (max-width: 376px) {
    flex: 0.7;
  }
  @media screen and (max-width: 321px) {
    flex: 0.6;
  }
`;

export const SubServiceHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #E80C0E;
  width: 100%;
`;
export const SubServiceDescription = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-right:10px;
  padding-left:10px;
`;
export const SubServiceBullets = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
export const BulletsContainer = styled.div`
  display: flex;
  padding-left:20px;
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin-bottom:5px;
`;
export const IconSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-right:10px;

`;
export const PointSection = styled.div`
  display: flex;
  flex: 4;
  align-items: center;


@media screen and (min-width: 426px) and (max-width: 769px) {
  flex: 1.7;
}
@media screen and (max-width: 426px) {
  flex: 2.5;
}
@media screen and (max-width: 376px) {
  flex: 3;
}
@media screen and (max-width: 321px) {
  flex: 4;
}
`;
export const SubServicePrice = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SubServiceHeading = styled.h5`
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
  opacity: 1;
  text-align:center;

  @media screen and (min-width: 426px) and (max-width: 1025px) {
    font-size: 20px;
  }
  @media screen and (max-width: 426px) {
    font-size: 15px;
  }
`;

export const SubServiceDescriptionText = styled.h5`
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  opacity: 1;
  text-align:center;

  @media screen and (min-width: 769px) and (max-width: 1025px) {
    font-size: 18px;
  }
  @media screen and (min-width: 426px) and (max-width: 769px) {
    font-size: 15px;
  }
  @media screen and (max-width: 426px) {
    font-size: 14px;
  }
`;
export const SubServiceBulletsText = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #000000;
margin-bottom:0px;

  @media screen and (min-width: 769px) and (max-width: 1025px) {
    font-size: 18px;
  }
  @media screen and (min-width: 426px) and (max-width: 769px) {
    font-size: 15px;
  }
  @media screen and (max-width: 426px) {
    font-size: 15px;
  }
`;
export const SubServicePriceText = styled.h5`
  font-weight: 700;
  font-size: 30px;
  color: #E80C0E;
  opacity: 1;
  text-align:center;

  @media screen and (min-width: 426px) and (max-width: 769px) {
    font-size: 20px;
  }
`;

export const BreakDownSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;  
  flex-direction: column;
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
