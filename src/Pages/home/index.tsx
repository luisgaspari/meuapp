import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <ul id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tarefas</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
            <hr />
            <p>Este projeto é a conclusão da N1 da disciplina de Programação Web.</p>
        </div>
    )
}

export default Home
