import { Route, Routes } from "react-router"
import Inicio from "../pages/Inicio"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
import NoEncontrado from "../pages/NoEncontrado"
import Servicios from "../pages/Servicios"


const RoutesComponent = ({ location }) => {
    return (
      <Routes location={location}>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes> 
    )

/*     const hookRoutes = useRoutes(
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

    return hookRoutes */
}


export default RoutesComponent