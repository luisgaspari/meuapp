import { Link } from "react-router-dom";

function Tasks() {
    return (
        <div>
            <h1>Tarefas</h1>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/contato">Contato</Link> &nbsp;
            <Link to="/sobre">Sobre</Link>
            <hr />
            <ul>
                <li>Tarefa 1</li>
                <li>Tarefa 2</li>
                <li>Tarefa 3</li>
                <li>Tarefa 4</li>
                <li>Tarefa 5</li>
            </ul>
        </div>
    )
}

export default Tasks;