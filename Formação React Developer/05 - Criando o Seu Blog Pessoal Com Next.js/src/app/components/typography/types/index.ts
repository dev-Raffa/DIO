export interface styledTypography {
  decoration?: string;
  margin?: string;
  lineheight?: string;
  weight?: string;
  color: string;
  align?: "center" | "left" | "right" | "justify";
}

export interface titleProps extends styledTypography {
  level: "1" | "2" | "3" | "4" | "5";
}

export interface textProps extends styledTypography {
  size: string;
}

export interface textLinkProps extends textProps {
  href: string;
}
