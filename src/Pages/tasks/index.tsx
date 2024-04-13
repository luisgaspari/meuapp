import { Link } from "react-router-dom";

function Tasks() {
    return (
        <div>
            <h1>Tarefas</h1>
            <ul id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tarefas</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
            <hr />
            <ul id="tasks">
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