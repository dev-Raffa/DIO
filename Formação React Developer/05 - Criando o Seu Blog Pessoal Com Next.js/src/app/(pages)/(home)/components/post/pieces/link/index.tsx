import { ReactNode } from "react";
import { StyledLink } from "@/app/components/typography/styles";
import { styles } from "../../styles";

export const LinkPost = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <StyledLink href={href} {...styles.link}>
      {children}
    </StyledLink>
  );
};
