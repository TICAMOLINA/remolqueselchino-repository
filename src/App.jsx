import { BrowserRouter } from "react-router"
import Header from "./components/Header"
import Routes from "./routes/Routes"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes />

      <Footer />    
    
    </BrowserRouter>
  )
}

export default App