import '../scss/pages/Nosotros.scss'
import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const Nosotros = () => {
  return (
    <motion.div
      variants={fade}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <main className='about-page'>
        <header className="about-page__video-container">
          <video className="about-page__video-file" controls autoPlay muted loop>
            <source src='video/video-01.mp4' type='video/mp4' />
          </video>
          <p>Ubicados en la ciudad de Tandil, te ofrecemos un servicio confiable de auxilio mecánico para autos y camionetas en cualquier lugar donde te encuentres. Estamos disponibles las 24 horas, listos para ayudarte cuando más lo necesites. Nos destacamos por la responsabilidad, el compromiso y el trato cordial con cada cliente.</p>
        </header>

        <section className="about-page__text-container">
          <div>
            <h1>Remolques<br />"El Chino"</h1>
            <p>Ubicados en la ciudad de Tandil, te ofrecemos un servicio confiable de auxilio mecánico para autos y camionetas en cualquier lugar donde te encuentres. Estamos disponibles las 24 horas, listos para ayudarte cuando más lo necesites. Nos destacamos por la responsabilidad, el compromiso y el trato cordial con cada cliente.</p>
          </div>
        </section>

        <section className="about-page__image-logo-container">
          <img className='about-page__logo-image' src="imgs/logo-tarjeta.webp" alt="Logo de la empresa - grúa en Tandil, auxilio mecánico Tandil" />
        </section>
      </main>
    </motion.div>
  )
}

export default Nosotros