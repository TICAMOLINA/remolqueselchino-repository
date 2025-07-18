import { BrowserRouter, useLocation } from "react-router"
import Header from "./components/Header"
import RoutesComponent from "./routes/Routes"
import Footer from "./components/Footer"
import WhatsappFloat from "./components/WhatsappFloat"
import { AnimatePresence } from "framer-motion"

const AnimatedRoutesWrapper = () => {
  const location = useLocation();

  return (
   <AnimatePresence mode="wait">
    <RoutesComponent location={location} key={location.pathname}/>
   </AnimatePresence>
  )
}

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <AnimatedRoutesWrapper />
      {/* <Routes /> */}

      <WhatsappFloat />

      <Footer />

    </BrowserRouter>


  )
}

export default App