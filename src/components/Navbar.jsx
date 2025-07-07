import menuItems from "../constants/menuItems.js"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
        <nav className="nav-bar">

      <ul className="nav-bar__nav-list">
        {
          menuItems.map((item) => (
            <NavItems item={item} key={item.id} />
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar