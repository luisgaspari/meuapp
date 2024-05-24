import { Box, Button, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../helpers/axios";
import Layout from "../../components/layouts";

function Login() {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    function handleLogin() {
        api.post('/auth/login', userData, { withCredentials: true })
            .then((resposta) => {
                if (resposta.status === 200) {
                    alert('Login efetuado com sucesso!')
                    localStorage.setItem('login', 'true')
                } else {
                    alert('Erro ao Entrar!')
                }
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Login</Heading>
                    <Box as={'form'}>
                        <Stack spacing={4} w={'full'}>
                            <Input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                            <Input type="password" placeholder="Senha" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                            <Button onClick={handleLogin}>Entrar</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Layout >
    )
}

export default Login;