import { ReactNode } from "react";
import { StyledText } from "@/app/components/typography/styles";
import { styles } from "../../styles";

export const DescriptionPost = ({ children }: { children: ReactNode }) => {
  return <StyledText {...styles.descripton}>{children}</StyledText>;
};
