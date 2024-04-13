import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/sobre">Ir para Sobre</Link>
        </div>
    )
}

export default Home
