import { createBrowserRouter } from 'react-router-dom'
import Sobre from './Pages/sobre'
import Home from './Pages/home'
import NotFound from './Pages/404'
import Tasks from './Pages/tasks'
import Contato from './Pages/contato'

const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/tasks', element: <Tasks /> },
    { path: '/contato', element: <Contato /> },
    { path: '/sobre', element: <Sobre /> },
])

export default router