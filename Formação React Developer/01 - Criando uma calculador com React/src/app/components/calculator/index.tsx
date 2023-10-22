import { Conteiner } from "../../../components/conteiner/styles"
import { Buttons } from "./parts/buttons"
import { Screen } from "./parts/screen"
import { style } from "./styles"

export const Calculator = () =>{
  return(
    <Conteiner{...style}>
      <Screen />
      <Buttons />
    </Conteiner>
  )
}