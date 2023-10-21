import {createContext, useContext} from 'react'
import { AuthDto } from '../../../models/auth'

export const AuthContext = createContext<AuthDto>({} as AuthDto)

export const useAuth = () => useContext(AuthContext);
