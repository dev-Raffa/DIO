import { StyledContainer } from "./styles";
import { containerProps } from "./types";

export const Container = ({ children, ...rest }: containerProps) => {
  return <StyledContainer {...rest}> {children}</StyledContainer>;
};
