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
    border: 1px solid red;
`