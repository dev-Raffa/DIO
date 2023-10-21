import { dioBankDto } from "../models/dioBank"

export const getAllLocalStorage = (): dioBankDto  => {
    const result = localStorage.getItem('diobank')
    let resp: dioBankDto;
    
    result ? resp = JSON.parse(result): resp = {isLogged: false} 

    return resp
}

export const createLocalStorage = (dioBankStoraged: dioBankDto): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBankStoraged))
}

export const changeLocalStorage = (dioBankStoraged: dioBankDto): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBankStoraged))
}

export const removeItemLocalStorage = (key: string): void =>{
    localStorage.removeItem(key)
}