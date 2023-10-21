import { Button } from "@chakra-ui/react"

export const ButtonLogin = ({onClick}: {onClick: ()=>void}) => {
  return (
    <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>Login</Button>
  )
}