import styled, { css } from "styled-components";

export const Container =
  styled.div <
  { $main: boolean } >
  ` display: flex;
    flex-direction: column;
    width: 80% !important;
    height: 100%;
    background-color: #fff;
`;
