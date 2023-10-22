import { ReactNode } from "react";
import { StyledTitle } from "@/app/components/typography/styles";
import { styles } from "../../styles";

export const TitlePost = ({ children }: { children: ReactNode }) => {
  return <StyledTitle {...styles.title}>{children}</StyledTitle>;
};
