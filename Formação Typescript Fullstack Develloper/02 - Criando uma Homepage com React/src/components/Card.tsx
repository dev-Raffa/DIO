import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { ButtonLogin } from "./button/Button"
import { login } from "../services/login"

export const Card = () => {
  return(
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box margin="auto" width='50%' minWidth='300px' backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <ButtonLogin onClick={login}></ButtonLogin>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}