import { ReactNode, useState } from "react"
import { AuthContext } from "./context"
import { login, responseLogin } from "../../services/login"
import { createLocalStorage, removeItemLocalStorage } from "../../services/storage"

export const AuthProvider = ({children}: {children: ReactNode})=>{
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const logIn = async (email:string, password:string) => {
    const resp:responseLogin = await login(email, password)

    if(resp.account){
      createLocalStorage({
        isLogged: true,
        user:{
          name: resp.account.name,
          email: resp.account.email
        }
      })
      setIsLogged(true)      
    }

    return resp.isValid
  }

  const logOut = () => {
    setIsLogged(false)
    removeItemLocalStorage('diobank')
  }

  return(
    <AuthContext.Provider value={{isLogged, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}