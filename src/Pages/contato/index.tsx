import { Link } from "react-router-dom";
import FormFatec from "../../components/form-fatec";

function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <ul id="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tarefas</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
            <hr />
            <FormFatec />
        </div>
    )
}

export default Contato;