import React from "react";

export interface buttonWrap extends React.HTMLAttributes<HTMLButtonElement>{
  width: string;
  height: string;
  color: string;
  borderradius?: string;
  border?: string;
  font?: {
    style?: string;
    weight?: string;
    size?: string;
    lineheight: number;
  }
}
