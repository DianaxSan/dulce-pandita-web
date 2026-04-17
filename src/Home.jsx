import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  const [productos, setProductos] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://backend-pandi.onrender.com/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.productos || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>🍰 Dulce Pandita</h1>
            </div>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
              <a href="#inicio">Inicio</a>
              <a href="#productos">Productos</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#contacto">Contacto</a>
              <Link to="/admin">Admin</Link>
            </nav>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <h2>Bienvenidos a Dulce Pandita</h2>
          <p>Tortas y bocaditos hechos con amor y los mejores ingredientes</p>
          <button className="cta-button">Conocer Productos</button>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="container">
          <h2>Sobre Dulce Pandita</h2>
          <div className="about-content">
            <p>
              En Dulce Pandita creamos deliciosas tortas y bocaditos que hacen tus momentos especiales aún más dulces.
              Cada producto es elaborado con ingredientes frescos y de calidad, pensando en satisfacer tus antojos más exquisitos.
            </p>
            <div className="features">
              <div className="feature">
                <span className="icon">✨</span>
                <h3>Ingredientes Frescos</h3>
                <p>Seleccionamos los mejores ingredientes</p>
              </div>
              <div className="feature">
                <span className="icon">❤️</span>
                <h3>Hecho con Amor</h3>
                <p>Preparado con dedicación y cuidado</p>
              </div>
              <div className="feature">
                <span className="icon">🎉</span>
                <h3>Para Tus Momentos</h3>
                <p>Perfectos para cualquier celebración</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="productos">
        <div className="container">
          <h2>Nuestros Productos</h2>
          {productos.length > 0 ? (
            <div className="products-grid">
              {productos.map((p) => (
                <div key={p.id} className="product-card">
                  <div className="product-image">
                    {p.imagen ? (
                      <img src={p.imagen} alt={p.nombre} />
                    ) : (
                      <span className="emoji">🍰</span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3>{p.nombre}</h3>
                    <p className="description">{p.descripcion}</p>
                    <div className="product-footer">
                      <span className="price">S/ {p.precio}</span>
                      <a
                        href={`https://wa.me/51920480984?text=Hola, quiero el producto: ${encodeURIComponent(
                          p.nombre
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                        aria-label="Pedir por WhatsApp"
                      >
                        <FaWhatsapp size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="loading">Cargando productos...</p>
          )}
        </div>
      </section>

      <footer className="footer" id="contacto">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Dulce Pandita</h3>
              <p>Tortas y bocaditos deliciosos para momentos especiales</p>
            </div>
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>📱 +51 999 999 999</p>
              <p>📧 info@dulcepandita.com</p>
            </div>
            <div className="footer-section">
              <h3>Síguenos</h3>
              <div className="social-links">
                <a href="#facebook">Facebook</a>
                <a href="#instagram">Instagram</a>
                <a href="#whatsapp">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Dulce Pandita. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;