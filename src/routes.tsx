import { createBrowserRouter } from 'react-router-dom'
import Sobre from './Pages/sobre'
import Home from './Pages/home'
import NotFound from './Pages/404'

const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/sobre', element: <Sobre /> },
])

export default router