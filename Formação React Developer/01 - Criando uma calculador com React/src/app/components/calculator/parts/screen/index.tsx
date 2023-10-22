import { useContext } from "react"
import { StyledInput } from "../../../../../components/input/styles"
import { CalculatorContext } from "../../../../contexts/calculator"
import { style } from "./style"

export const Screen = () =>{
  const {value, onChangeValue} = useContext(CalculatorContext)

  return(
    <StyledInput value={value} onChange={(e)=>onChangeValue(e.currentTarget.value) } {...style} />
  )
}