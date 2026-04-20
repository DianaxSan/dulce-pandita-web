import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dulce Pandita</h3>
            <p>Tortas y bocaditos deliciosos para momentos especiales</p>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <p><FaPhone /> +51 973 914 045</p>
            <p><FaEnvelope /> info@dulcepandita.com</p>
          </div>

          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dulce Pandita</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;