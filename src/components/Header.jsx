import Navbar from "./Navbar"
import '../scss/components/Header.scss'
import Searchbar from "./Searchbar"

const Header = () => {
  return (
        <header className="main-header">
            <input type="checkbox" id="menu" />

            <Navbar />

            <Searchbar />

        </header>
  )
}

export default Header