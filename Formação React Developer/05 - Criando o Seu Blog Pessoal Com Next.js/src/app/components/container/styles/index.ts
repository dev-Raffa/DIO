"use client";

import { styled } from "styled-components";
import { containerProps } from "../types";

export const StyledContainer = styled("div")<containerProps>`
  display: flex;
  ${({ position }) => position && `position: ${position};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ alignx }) => alignx && `justify-content: ${alignx};`}
  ${({ aligny }) => aligny && `align-items: ${aligny};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ maxheight }) => maxheight && `max-height: ${maxheight};`}
  ${({ minheight }) => minheight && `min-height: ${minheight};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ maxwidth }) => maxwidth && `max-width: ${maxwidth};`}
  ${({ minwidth }) => minwidth && `min-width: ${minwidth};`}
  ${({ borderradius }) => borderradius && `border-radius: ${borderradius};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ boxshadow }) => boxshadow && `box-shadow:${boxshadow};`}
  ${({ bgcolor }) => bgcolor && `background-color:${bgcolor};`}
  ${({ fontcolor }) => fontcolor && `color:${fontcolor};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
`;
