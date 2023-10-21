import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"

import { accountDto } from "../models/account"
import { useAuth } from "../providers/auth/context"


export const Conta = () => {
    const [ userData, setUserData ] = useState<null | accountDto>()
    const { id } = useParams()
    const navigate = useNavigate()
    const actualData = new Date()
    const { isLogged } = useAuth()

    !isLogged && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | accountDto = await api
            setUserData(data)
        }

        getData()
    }, [])


    if(userData && id !== userData.id) {
        navigate('/')
    }
  
    return (
        <Center>
            <SimpleGrid columns={3} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                            <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                            <CardInfo mainContent="Dados da conta" content="visualizar" linkTo="/conta/:id/infoconta"/>
                        </>
                    )
                }
            </SimpleGrid>    
        </Center>
    )
}