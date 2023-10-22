import React from "react";

export interface rowProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  direction?: 'row'| 'row-reverse' | 'column'| 'column-reverse';
  bgcolor?: string;
}