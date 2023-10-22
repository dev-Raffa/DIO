"use client";

import Link from "next/link";
import { styled } from "styled-components";
import { textLinkProps, textProps, titleProps } from "../types";

export const StyledTitle = styled("h1").attrs<titleProps>(({ level }) => ({
  as: `h${level}`,
}))<titleProps>`
  user-select: none;
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ lineheight }) => lineheight && ` line-height:${lineheight};`}
  ${({ margin }) => margin && `margin: ${margin};`};
`;

export const StyledText = styled.p<textProps>`
  user-select: none;
  ${({ align }) => align && `text-align: ${align};`};
  ${({ margin }) => margin && `margin: ${margin};`};
  ${({ color }) => color && `color: ${color};`}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ size }) => size && `font-size: ${size};`}
  ${({ decoration }) =>
    decoration
      ? `text-decoration: ${decoration};`
      : "text-decoration: none;  "};
`;

export const StyledLink = styled(Link)<textLinkProps>`
  cursor:;
  display: inline-block;
  ${({ align }) => align && `text-align: ${align};`};
  ${({ margin }) => margin && `margin: ${margin};`};
  ${({ color }) => color && `color: ${color};`}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ size }) => size && `font-size: ${size};`}
  ${({ decoration }) =>
    decoration
      ? `text-decoration: ${decoration};`
      : "text-decoration: none;  "};
`;
