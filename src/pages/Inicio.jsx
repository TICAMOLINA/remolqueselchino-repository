import Slider from '../components/Slider'
import '../scss/pages/Inicio.scss'
import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const Inicio = () => {
  return (
    <motion.div
      variants={fade}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <main className="home">
        <header className="home__first-container">
          <h1 className="home__tittle">Estés donde estés, SERVICIO DE REMOLQUE</h1>
          <p className="home__first-text">24 hs</p>
        </header>

        <section className='home__slider-container'>
          <Slider />
        </section>

        <section className="home__description-container">
          <p className='home__second-text'>Remolques El Chino es una empresa nueva dedicada al auxilio de autos y camionetas. Brindamos asistencia con responsabilidad y compromiso, disponibles para ayudarte las 24 horas y en cualquier momento. Trabajamos con seriedad para ganarnos la confianza de nuestros clientes.</p>
        </section>
      </main>
    </motion.div>
  )
}

export default Inicio