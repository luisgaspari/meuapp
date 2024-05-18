import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../helpers/axios";

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
        <>
            <h1>Login</h1>
            <form>
                <Input type="email" placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                <Input type="password" placeholder="Senha" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                <Button onClick={handleLogin}>Entrar</Button>
            </form>
        </>
    )
}

export default Login;