import { Link } from "react-router-dom";

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <ul id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tarefas</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
            <hr />
            <p>Projeto desenvolvido por:</p>
            <h2>Luis Antonio Gaspari</h2>
            <h3>Fatec - Análise e Desenvolvimento de Sistemas</h3>
            <h3>4º Semestre - 2024</h3>
        </div>
    )
}

export default Sobre;