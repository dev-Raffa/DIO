import { StyledTitle } from "./styles"
import { titleProps } from "./types"

export const Tilte = ({level, ...args}: titleProps) =>{
  return (
    <StyledTitle as={`h${level}`} level={level} {...args} />
  )
}
