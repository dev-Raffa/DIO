import { ReactNode } from "react";
import { StyledText } from "@/app/components/typography/styles";
import { styles } from "../../styles";

export const DatePost = ({ children }: { children: ReactNode }) => {
  return <StyledText {...styles.date}>{children}</StyledText>;
};
