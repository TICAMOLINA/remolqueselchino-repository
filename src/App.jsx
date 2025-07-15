import { BrowserRouter } from "react-router"
import Header from "./components/Header"
import Routes from "./routes/Routes"
import Footer from "./components/Footer"
import WhatsappFloat from "./components/WhatsappFloat"

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes />

      <WhatsappFloat />

      <Footer />

    </BrowserRouter>


  )
}

export default App