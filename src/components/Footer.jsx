import { Link } from 'react-router'
import '../scss/components/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container__footer-logo">
        <div className="footer-container__logo-facebook">
          <Link to="https://www.facebook.com/share/19xLarRsue/" target='blank'>
          <i className="fab fa-facebook" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="footer-container__logo-whatsapp">
          <Link to="https://www.whatsapp.com/?lang=es_LA" target='blank'>
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          </Link>
        </div>

      </div>
      <div className="footer-container__footer-text">
        <p>® Copyright 2025 - Todos los derechos reservados</p>
      </div>

    </footer>
  )
}

export default Footer