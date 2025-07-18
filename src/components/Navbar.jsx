import menuItems from "../constants/menuItems.js"
import NavItems from "./NavItems"
import '../scss/components/Header.scss'

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div>
                <ul className="nav-bar__nav-list">
                    {
                        menuItems.map((item) => (
                            <NavItems item={item} key={item.id} />
                        ))
                    }
                </ul>
            </div>

        </nav>
    )
}

export default Navbar