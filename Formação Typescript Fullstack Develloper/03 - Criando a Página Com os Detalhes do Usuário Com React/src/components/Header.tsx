import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/auth/context'

export const Header  = () => {
  const { isLogged, logOut } = useAuth()
  const navigate = useNavigate()

  const logout = () =>{ 
    logOut()
    navigate('/')
  }

  return(
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLogged && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>    
  )
}
