import { NavLink } from "react-router"
import '../scss/components/Header.scss'
import closeToggleMenu from "../utils/closeToggleMenu.js"

const NavItems = ({ item }) => {
  return (
    <li className="nav-bar__nav-item">
      <NavLink to={item.ruta}
        className="nav-bar__nav-link"
        key={item.id}
        style={{ "--delay": `${item.id * 0.2}s` }}
        onClick={closeToggleMenu}>
        <i className={item.iconClassName} aria-hidden="true"></i>
        {item.nombre}
      </NavLink>
    </li>
  )
}

export default NavItems