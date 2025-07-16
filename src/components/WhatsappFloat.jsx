import { Link } from 'react-router';
import '../scss/components/WhatsappFloat.scss'

const WhatsappFloat = () => {
  return (
    <Link className='wa-icon-link'
      to="https://wa.me/2281313621" // Reemplazá con tu número
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </Link>
  );
};

export default WhatsappFloat;