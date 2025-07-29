import '../scss/pages/Contacto.scss'
import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const Contacto = () => {
  return (
    <motion.div
      variants={fade}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >


      <main className="contact-page">
        <header className="contact-page__tittle-container">
          <h1>Datos de <span>contacto</span></h1>
        </header>

        <section className="contact-page__section-contact-container">
          <article className="contact-page__text-container">
            <div className="contact-page__text phone-number">
              <p><i className="fa fa-phone" aria-hidden="true"></i> (249)-4341482</p>
            </div>
            <div className="contact-page__text email">
              <p><i className="fa fa-envelope" aria-hidden="true"></i> elchinoremolques @gmail.com</p>
            </div>
            <div className="contact-page__text adress">
              <p><i className="fa fa-location-arrow" aria-hidden="true"></i> Gaucho Rivero 458 - Tandil</p>
            </div>
          </article>

          <article className="contact-page__map-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.886082757985!2d-59.160529224379715!3d-37.32152600606633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f7dad48e441%3A0x14b021eedb282e0e!2sGaucho%20Rivero%20458%2C%20B7000%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1752795396309!5m2!1ses!2sar"
              width="100%" height="300" style={{ border: 0 }} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </article>
        </section>
      </main>
    </motion.div>
  )
}

export default Contacto