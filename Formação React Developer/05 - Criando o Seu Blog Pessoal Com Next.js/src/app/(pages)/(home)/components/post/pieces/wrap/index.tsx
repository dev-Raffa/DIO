import { ReactNode } from "react";
import { Container } from "@/app/components/container";
import { styles } from "../../styles";

export const WrapPosts = ({ children }: { children?: ReactNode }) => {
  return <Container {...styles.wrap}>{children}</Container>;
};
