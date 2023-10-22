import { StyledTitle } from "./styles";
import { titleProps } from "./types";

export const Tilte = ({ ...args }: titleProps) => {
  return <StyledTitle {...args} />;
};
