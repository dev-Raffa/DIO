import { Box, Center, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { useAuth } from "../providers/auth/context";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    const { logIn, isLogged } = useAuth()
    
    const validateUser = async (email: string, password: string) => {
        const isValid = await logIn(email, password)
        
        isValid && navigate('/conta/1')
        !isValid && setError('usuário ou senha inválidos')
    }
  
    isLogged && navigate('/conta/1')
    
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value) } />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                    />
                </Center>
                {error && <p> {error} </p>}
            </Card>
        </Box>
    );
}

export default Home;
