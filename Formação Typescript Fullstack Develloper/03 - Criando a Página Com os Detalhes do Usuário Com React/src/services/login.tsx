import { api } from "../api"
import { accountDto } from "../models/account"

export interface responseLogin {
    isValid: boolean
    account?: accountDto
}
export const login = async (email: string, password: string): Promise<responseLogin> => {
    const data: accountDto  = await api

    if(email !== data.email || password !== data.password) {
        return {
            isValid: false
        }
    }

    return {
        isValid: true,
        account: data}
    }
