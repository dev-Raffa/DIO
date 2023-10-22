import { ReactNode } from "react";
import { styles } from "../../styles";
import { Container } from "@/app/components/container";

export const WrapProfile = ({ children }: { children: ReactNode }) => {
  return <Container {...styles.wrap}>{children}</Container>;
};
