import { SimpleGrid } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import CardInfo from "../components/CardInfo"
import { getAllLocalStorage } from "../services/storage"
import { dioBankDto } from "../models/dioBank"


const ContaInfo = () => { 
    const dioBank: dioBankDto = getAllLocalStorage()
    const navigate = useNavigate()
    
    !dioBank.user && navigate('/')

    return (
        <SimpleGrid columns={3} spacing={8} padding={16} >
            <CardInfo mainContent="name:" content={dioBank.user ? dioBank.user.name : ''} />
            <CardInfo mainContent="email:" content={dioBank.user ? dioBank.user.email : ''} />
            <CardInfo mainContent="Conta" content="visualizar" linkTo="/conta/1" />
        </SimpleGrid>
    )
}

export default ContaInfo
