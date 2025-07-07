import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
import NoEncontrado from "../pages/NoEncontrado"

const Routes = () => {

    const hookRoutes = useRoutes(
                [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )

    return hookRoutes
}

export default Routes