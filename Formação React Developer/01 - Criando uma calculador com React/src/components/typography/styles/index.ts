import { styled } from "styled-components";
import { textProps, titleProps } from "../types";

export const StyledTitle = styled('h1')<titleProps>`
  user-select: none;
  ${({weight, lineheight})=> ` font: ${weight} ${lineheight};`}
`

export const StyledText = styled.p<textProps>`
  user-select:none;
  text-decoration: ${({decoration})=> decoration};
  text-align: ${({ align }) => align};
  margin: ${({margin}) => margin};
  ${({color})=> `color: ${color};`}
  ${({weight})=> `font-weight: ${weight};`}
  ${({size})=> `font-size: ${size};`}

`;