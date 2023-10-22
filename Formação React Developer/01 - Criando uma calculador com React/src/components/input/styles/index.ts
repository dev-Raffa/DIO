import { styled } from "styled-components";
import { inputProps } from "../types";

export const StyledInput = styled.input<inputProps>`
 ${({width})=> width && `width: ${width};`}
 ${({height})=> height && `height: ${height};`}
 ${({border})=> border && `border: ${border};`}
 ${({borderradius})=> borderradius && `border-radius: ${borderradius};`}
 ${({bgcolor})=> bgcolor && `background-color: ${bgcolor};`}
 ${({fontsize})=> fontsize && `font-size: ${fontsize};`}
 ${({fontcolor})=> fontcolor && `color: ${fontcolor};`}
 ${({textalign})=> textalign && `text-align: ${textalign};`}

`