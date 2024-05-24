import { Box, Button, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../helpers/axios";
import Layout from "../../components/layouts";

function Cadastro() {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleRegister() {
        api.post('/auth/register', userData)
            .then((resposta) => {
                if (resposta.status === 201) {
                    alert('Usuário cadastrado com sucesso!')
                } else {
                    console.log(resposta)
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
                    <Heading fontSize={'3xl'}>Cadastre-se</Heading>
                    <Box as={'form'}>
                        <Stack spacing={4} w={'full'}>
                            <Input type="text" placeholder="Nome" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                            <Input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                            <Input type="password" placeholder="Senha" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                            <Button onClick={handleRegister}>Cadastrar</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Layout >
    )
}

export default Cadastro;