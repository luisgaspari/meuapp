import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/tasks">Tarefas</Link> &nbsp;
            <Link to="/contato">Contato</Link> &nbsp;
            <Link to="/sobre">Sobre</Link>
            <hr />
            <p>Este projeto é a conclusão da N1 da disciplina de Programação Web.</p>
        </div>
    )
}

export default Home
