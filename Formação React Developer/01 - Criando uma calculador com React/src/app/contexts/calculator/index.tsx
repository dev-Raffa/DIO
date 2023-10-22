import {createContext, ReactNode, useState} from 'react'

interface contextProps {
  value: string;
  setValue: (newValue: string)=> void;
  onChangeValue: (newValue: string ) => void;
  result?: number;
  setResult: (operation:string)=> void;
  clearScreen: ()=>void;
}

export const CalculatorContext = createContext({} as contextProps)

export const CalculatorProvider = ({children}: {children: ReactNode}) => {
  const [result, changeResult] = useState<number>()
  const [value, changeValue] = useState<string>('')

  const setValue = (newValue: string) => {
    changeValue(value + newValue)
  }

  const onChangeValue = (newValue:string) => {
    changeValue(newValue)
  }

  const setResult = (operation: string) => {
    const result = eval(operation)
    if (result) {
      changeResult(result)
      changeValue(result)
    }
  }

  const clearScreen = ()=>{
    changeValue('')
  }

  return(
    <CalculatorContext.Provider value={{result, setResult, value, setValue, onChangeValue, clearScreen}}>
      {children}
    </CalculatorContext.Provider>
  )
}
