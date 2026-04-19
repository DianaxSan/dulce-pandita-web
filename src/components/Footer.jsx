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
            <p>📱 +51 973 914 045</p>
            <p>📧 info@dulcepandita.com</p>
          </div>

          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">WhatsApp</a>
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