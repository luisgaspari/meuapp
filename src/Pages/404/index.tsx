import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>Página não encntrada!</p>
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}

export default NotFound