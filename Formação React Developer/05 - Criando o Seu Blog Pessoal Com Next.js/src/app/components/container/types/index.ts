type variants =
  | "header"
  | "main"
  | "aside"
  | "footer"
  | "article"
  | "section"
  | "address"
  | "figure";

export interface containerProps extends React.HTMLAttributes<HTMLDivElement> {
  as: variants;
  position?: string;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  alignx?: string;
  aligny?: string;
  height?: string;
  minheight?: string;
  maxheight?: string;
  width?: string;
  maxwidth?: string;
  minwidth?: string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  bgcolor?: string;
  fontsize?: string;
  fontcolor?: string;
  margin?: string;
  padding?: string;
  gap?: string;
  border?: string;
  borderradius?: string;
  boxshadow?: string;
  overflow?: "scroll" | "hidden" | "visible";
}
