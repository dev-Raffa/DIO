import { ReactNode } from "react";
import { StyledText } from "@/app/components/typography/styles";
import { styles } from "../../styles";

export const TextPost = ({ children }: { children: ReactNode }) => {
  return <StyledText {...styles.text}>{children}</StyledText>;
};
