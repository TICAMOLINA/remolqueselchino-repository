import { Link, NavLink } from 'react-router'
import '../scss/components/Searchbar.scss'
import closeToggleMenu from '../utils/closeToggleMenu.js'


const Searchbar = () => {
    return (
        <div className="search-bar">

            <div className="search-bar__emergency-button">
                <Link to="https://wa.me/2494341482">
                <span>Tenes una urgencia?</span>
                <span>Comunicate con nosotros</span>
                </Link>
            </div>

            <div className="search-bar__logo-container">
                <NavLink to="/"
                onClick={closeToggleMenu}>
                <img className="search-bar__logo-image" src="/imgs/logo-web.webp" alt="Logo de la empresa - grúa en Tandil, auxilio mecánico Tandil" />
                </NavLink>
            </div>

            <div className="menu-toogle">
                <label htmlFor="menu" className="menu-toogle__label">
                    <span className="menu-toogle__top-bread"></span>
                    <span className="menu-toogle__meat"></span>
                    <span className="menu-toogle__meat"></span>
                    <span className="menu-toogle__bottom-bread"></span>
                </label>
            </div>

        </div>

    )
}

export default Searchbar