import {ReactNode} from 'react'
import { renderHook, act } from "@testing-library/react"
import { useAuth } from "../context"
import { AuthProvider } from ".."
import * as StorageService from '../../../services/storage'


describe('AuthProvider', () =>{
  const mockEmail= 'nath@dio.bank'
  const mockSenha='123456'
  const wrapper = ({children}: {children: ReactNode})=>(
  <AuthProvider>{children}</AuthProvider>
  )    
  const {result} =  renderHook(()=> useAuth(),{wrapper})
  
  beforeEach(()=>{
    result.current.isLogged = false
  })
  
  describe('logIn', ()=>{
    
    const spyCreateLocalStorage = jest.spyOn(StorageService, 'createLocalStorage')
    
    it('deve alterar o valor de isLogged para true se o email e a senha forem válidos', async ()=>{
      const resp  = await act(() => result.current.logIn(mockEmail, mockSenha))

      expect(spyCreateLocalStorage).toHaveBeenCalledTimes(1)
      expect(result.current.isLogged).toBeTruthy()
      expect(resp).toBeTruthy()
    })
  
    it('não deve alterar o valor de isLogged se o email ou a senha forem inválidos', async ()=>{    
      const resp = await act(()=> result.current.logIn(mockEmail, 'senha inválida'))
      
      expect(spyCreateLocalStorage).toHaveBeenCalledTimes(0)
      expect(result.current.isLogged).toBeFalsy()
      expect(resp).toBeFalsy()
    })
  })

  describe('logOut',  ()=>{
    const spyRemoveItemLocalStorage = jest.spyOn(StorageService, 'removeItemLocalStorage')
    
    it('deve alterar o valor de isLogged para false', async ()=>{      
      
      await act(()=> result.current.logOut())
      
      expect(spyRemoveItemLocalStorage).toHaveBeenCalled()  
      expect(result.current.isLogged).toBeFalsy()
    })
  })
})