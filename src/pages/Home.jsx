import { useState, useEffect } from "react";
import { FaWhatsapp, FaCookie, FaGifts, FaUtensils, FaWineGlassAlt } from "react-icons/fa";
import useProductos from "../hooks/useProductos";
import MainLayout from "../layouts/MainLayout";
import logo from "../assets/logo.png";

function Home() {
  const { productos, loading } = useProductos();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=500&fit=crop",
      title: "Tortas Artesanales",
      description: "Hechas con amor para tus momentos especiales"
    },
    {
      url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&h=500&fit=crop",
      title: "Bocaditos Deliciosos",
      description: "Pequeñas tentaciones que enamoran"
    },
    {
      url: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=1200&h=500&fit=crop",
      title: "Postres Premium",
      description: "Ingredientes de la mejor calidad"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <MainLayout>
      <section className="hero" id="inicio">
        <div className="carousel">
          <div className="carousel-container">
            {slides.map((slide, index) => (
              <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
                <img src={slide.url} alt={slide.title} />
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
          <button className="carousel-btn next" onClick={nextSlide}>❯</button>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="container">
          <div className="about-header">
            <img src={logo} alt="Logo Dulce Pandita" className="about-logo" />
            <div>
              <h2>Sobre Dulce Pandita</h2>
              <p className="tagline">Con amor a tu casita</p>
            </div>
          </div>
          <p className="about-description">
            En Dulce Pandita creamos deliciosas tortas y bocaditos que hacen tus momentos especiales aún más dulces. Utilizamos ingredientes frescos y de alta calidad para garantizar el mejor sabor en cada bocado.
          </p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <FaCookie />
              </div>
              <h3>Tortas Artesanales</h3>
              <p>Diseñadas con creatividad y pasión para ocasiones especiales.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaGifts />
              </div>
              <h3>Bocaditos Deliciosos</h3>
              <p>Pequeñas delicias perfectas para cualquier momento.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaWineGlassAlt />
              </div>
              <h3>Cuchareables</h3>
              <p>Deliciosos postres en vasitos para disfrutar con cuchara.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaUtensils />
              </div>
              <h3>Ingredientes Premium</h3>
              <p>Solo lo mejor para nuestros clientes exigentes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="productos">
        <div className="container">
          <h2>Nuestros Productos</h2>

          {loading ? (
            <p className="loading">Cargando productos...</p>
          ) : (
            <div className="products-grid">
              {productos.map((p) => (
                <div key={p.id} className="product-card">
                  <div className="product-image">
                    {p.imagen ? (
                      <img src={p.imagen} alt={p.nombre} />
                    ) : (
                      <img src={logo} alt="Logo Dulce Pandita" className="product-logo" />
                    )}
                  </div>

                  <div className="product-info">
                    <h3>{p.nombre}</h3>
                    <p className="description">{p.descripcion}</p>

                    <div className="product-footer">
                      <span className="price">S/ {p.precio}</span>

                      <a
                        href={`https://wa.me/51973914045?text=Hola, quiero el producto: ${encodeURIComponent(p.nombre)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                      >
                        <FaWhatsapp size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;