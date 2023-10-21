
import { login, responseLogin } from "./login"

describe('login', () => {
    
    const mockEmail = 'nath@dio.bank'
    const mockSenha = '123456'
        
    it('Deve exibir um alert com boas vindas caso o email e a senha sejam válidos', async() => {
        const response: responseLogin = await login(mockEmail, mockSenha)
        
        expect(response.isValid).toBeTruthy()
        expect(response.account).toBeDefined()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response: responseLogin = await login('email@invalido.com', mockSenha)
        
        expect(response.isValid).toBeFalsy()
        expect(response.account).toBeUndefined()
    })

    it('Deve exibir um erro caso a senha seja inválida', async () => {
        const response: responseLogin = await login(mockEmail, 'senha inválida')
        
        expect(response.isValid).toBeFalsy()
        expect(response.account).toBeUndefined()
    })

    it('Deve exibir um erro caso o email e a senha sejam inválidos', async () => {
        const response: responseLogin = await login('email@invalido.com', 'senha inválida')
        
        expect(response.isValid).toBeFalsy()
        expect(response.account).toBeUndefined()
    })
})