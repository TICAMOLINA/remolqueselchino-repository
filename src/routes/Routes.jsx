import { Route, Routes } from "react-router"
import Inicio from "../pages/Inicio"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
import NoEncontrado from "../pages/NoEncontrado"


const RoutesComponent = ({ location }) => {
    return (
      <Routes location={location}>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes> 
    )
}

export default RoutesComponent