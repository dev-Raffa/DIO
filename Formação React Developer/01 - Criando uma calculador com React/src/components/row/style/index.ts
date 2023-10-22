import { styled } from "styled-components";
import { rowProps } from "../types";

export const StyledRow = styled.section<rowProps>`
  display: flex;
  ${({direction})=> direction && `flex-direction: ${direction};`}
  ${({bgcolor})=> bgcolor && `background-color: ${bgcolor};`}
  ${({height})=> height && `height: ${height};`}
  ${({width})=> width && `width: ${width};`}
`