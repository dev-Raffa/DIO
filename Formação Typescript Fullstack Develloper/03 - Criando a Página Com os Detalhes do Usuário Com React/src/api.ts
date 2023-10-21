import { accountDto } from "./models/account"

const conta: accountDto = {
    email: 'nath@dio.bank',
    password: '123456',
    name: 'Nathaly Souza',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise<accountDto>((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
