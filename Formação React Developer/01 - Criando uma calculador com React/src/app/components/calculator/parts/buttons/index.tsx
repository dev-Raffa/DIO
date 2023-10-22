import { useContext } from "react"
import { Button } from "../../../../../components/buttons"
import { StyledRow } from "../../../../../components/row/style"
import { CalculatorContext } from "../../../../contexts/calculator"
import { style } from "./style"

export const Buttons =() => {
  const {value, setValue, setResult, clearScreen} = useContext(CalculatorContext)

  const clickButtonOperation = (operation: string) => {
    value && setValue(operation)
  }

  const clickButtonEqual = ()=> {
    value && setResult(value)
  }

  return(
    <section>
      <StyledRow>
        <Button.wrap onClick={ ()=> clickButtonOperation('*')} {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            x
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={ ()=> clickButtonOperation('/')} {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            /
          </Button.text>
        </Button.wrap>
        <Button.wrap  onClick={clearScreen} {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            c
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={() =>setValue('.') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            .
          </Button.text>
        </Button.wrap>
      </StyledRow>
      <StyledRow>
        <Button.wrap onClick={() =>setValue('7') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            7
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={() =>setValue('8') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            8
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={() =>setValue('9') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            9
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={ ()=> clickButtonOperation('-')} {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            -
          </Button.text>
        </Button.wrap>
      </StyledRow>
      <StyledRow>
        <Button.wrap onClick={() =>setValue('4') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            4
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={() =>setValue('5') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            5
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={() =>setValue('6') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            6
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={()=> clickButtonOperation('+')} {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            +
          </Button.text>
        </Button.wrap>
      </StyledRow>
      <StyledRow>
        <Button.wrap onClick={() =>setValue('1') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            1
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={() =>setValue('2') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            2
          </Button.text>
        </Button.wrap>
        <Button.wrap onClick={() =>setValue('3') } {...style.buttons.wrap}>
          <Button.text {...style.buttons.text}>
            3
          </Button.text>
        </Button.wrap>
        <Button.wrap {...style.buttons.wrap}>
          <Button.text onClick={clickButtonEqual} {...style.buttons.text}>
            =
          </Button.text>
        </Button.wrap>
      </StyledRow>
    </section>
  )
}