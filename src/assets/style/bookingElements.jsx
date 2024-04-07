import styled, { css } from "styled-components";

export const Container = styled.section`
  ${(props) => {
    switch (props.$mode) {
      case "main":
        return css`
          width: 100%;
          height: 100vh;
          display: grid;
          grid-template-columns: 50% 50%;
          align-items: center;
          justify-content: center;
          @media screen and (max-width: 767px) {
            display: flex;
            flex-direction: column;
          }
        `;
      case "left":
        return css`
          width: 100%;
          height: 100% !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `;
      case "right":
        return css`
          width: 100%;
          height: 100% !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0d0d0d;
          overflow: hidden;
          @media screen and (max-width: 767px) {
            display: none;
          }
        `;
    }
  }}
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  /* border: 1px solid red; */
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* border: 1px solid red; */
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 15%;
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  /* border: 1px solid red; */
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  /* border: 1px solid red; */
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`;

export const InputField = styled.input`
  width: 90%;
  height: 40px;
  margin-top: 5px;
  color: #0d0d0d;
  background: transparent;
  border-color: #e5e5e5;
  padding-left: 5px;
  border-radius: 5px;
`;

export const SelectField = styled.select`
  width: 90%;
  height: 40px;
  margin-top: 5px;
  color: #0d0d0d;
  background: transparent;
  border-color: #e5e5e5;
  padding-left: 5px;
  border-radius: 5px;
`;

export const Option = styled.option`
  width: 90%;
  height: 40px;
  margin-top: 40px;
  color: #0d0d0d;
  background: transparent;
  border-color: #e5e5e5;
  padding-left: 5px;
  border-radius: 5px;
`;

export const TimeSlotContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: transparent;
  /* border: 1px solid red; */
  justify-content: space-between;
`;

export const TimeSlots = styled.div`
  width: auto;
  height: 30px;
  padding: 5px;
  font-size: 15px;
  border-radius: 3px;
  border: 1px solid ;
  margin: 5px;
  cursor: pointer;

  border-color: ${props => props.selected ? "red" : "black"};




`;


export const ButtonContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 40px;
`

export const Image = styled.img`
display: flex;
object-fit: cover;
height: 100%;
width: 100%;
`