import { Link } from "react-router-dom";
import FormFatec from "../../components/form-fatec";

function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/tasks">Tarefas</Link> &nbsp;
            <Link to="/sobre">Sobre</Link>
            <hr />
            <FormFatec />
        </div>
    )
}

export default Contato;