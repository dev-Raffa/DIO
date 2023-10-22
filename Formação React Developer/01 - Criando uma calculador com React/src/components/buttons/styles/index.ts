import { styled } from "styled-components";
import { buttonWrap } from "../types";

export const StyledButtonWrap = styled.button<buttonWrap>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({border})=> border && `border: ${border};`}
  ${({borderradius})=> borderradius && `border-radius: ${borderradius};`}
  ${({color})=> color && `background-color: ${color};`}
  ${({width})=> width && `width: ${width};`}
  ${({height})=> height && `height: ${height};`}
  ${({font})=> font && `font: ${font.style} ${font.weight} ${font.size} ${font.lineheight}`}
`
