import { dioBankDto } from "../models/dioBank"
import {changeLocalStorage, createLocalStorage, getAllLocalStorage, removeItemLocalStorage } from "./storage"

const dioBankMock: dioBankDto = {
    isLogged: true,
    user:{
        name: 'teste',
        email: 'email@email.com',
    } 
}

describe('storage', () => {
    const spySetItem = jest.spyOn(Storage.prototype, 'setItem')
    const spyRemoveItem = jest.spyOn(Storage.prototype, 'removeItem')
    const spyGetItem = jest.spyOn(Storage.prototype, 'getItem')
    
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        
        getAllLocalStorage()
        expect(spyGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage(dioBankMock)
        expect(spySetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBankMock))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBankMock)
        expect(spySetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBankMock))
    })

    it('Deve remover um objeto do localStorage', () => {
        const keyMock = 'diobank'
        
        removeItemLocalStorage(keyMock)
        expect(spyRemoveItem).toHaveBeenCalledWith(keyMock)
    })
})