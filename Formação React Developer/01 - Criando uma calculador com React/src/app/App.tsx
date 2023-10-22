import { Conteiner } from "../components/conteiner/styles"
import { Calculator } from "./components/calculator"
import { CalculatorProvider } from "./contexts/calculator"
import { style } from "./styles"

function App() {
  return (
    <CalculatorProvider>
      <Conteiner {...style}>
        <Calculator />
      </Conteiner>
    </CalculatorProvider>
  )
}

export default App
