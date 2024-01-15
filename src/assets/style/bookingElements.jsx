import styled , {css} from "styled-components";

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
            `
      }
    }}
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90%;
    /* border: 1px solid red; */
`


export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    height: 70%;
    justify-content: center;
`

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  /* border: 1px solid red; */
`

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`

export const InputField = styled.input`
  width: 90%;
  height: 40px;
  margin-top: 5px;
  color: #0d0d0d;
  background: transparent;
  border-color: #e5e5e5;
  padding-left: 5px;
  border-radius: 5px;
`

export const SelectField = styled.select`
  width: 90%;
  height: 40px;
  margin-top: 5px;
  color: #0d0d0d;
  background: transparent;
  border-color: #e5e5e5;
  padding-left: 5px;
  border-radius: 5px;
`

export const Option = styled.option`
  width: 90%;
  height: 40px;
  margin-top: 40px;
  color: #0d0d0d;
  background: transparent;
  border-color: #e5e5e5;
  padding-left: 5px;
  border-radius: 5px;
`