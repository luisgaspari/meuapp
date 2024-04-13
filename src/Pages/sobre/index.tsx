import { Link } from "react-router-dom";

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/tasks">Tarefas</Link> &nbsp;
            <Link to="/contato">Contato</Link>
            <hr />
            <p>Projeto desenvolvido por:</p>
            <h2>Luis Antonio Gaspari</h2>
            <h3>Fatec - Análise e Desenvolvimento de Sistemas</h3>
            <h3>4º Semestre - 2024</h3>
        </div>
    )
}

export default Sobre;