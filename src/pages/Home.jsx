import { FaWhatsapp } from "react-icons/fa";
import useProductos from "../hooks/useProductos";
import MainLayout from "../layouts/MainLayout";
import logo from "../assets/logo.png";

function Home() {
  const { productos, loading } = useProductos();

  return (
    <MainLayout>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <img src={logo} alt="Dulce Pandita Logo" className="hero-logo" />
          <h2>Bienvenidos a Dulce Pandita</h2>
          <p>Tortas y bocaditos hechos con amor y los mejores ingredientes para hacer tus momentos especiales inolvidables</p>
          <button className="cta-button">Conocer Productos</button>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="container">
          <h2>Sobre Dulce Pandita</h2>
          <p>
            En Dulce Pandita creamos deliciosas tortas y bocaditos que hacen tus momentos especiales aún más dulces. Utilizamos ingredientes frescos y de alta calidad para garantizar el mejor sabor en cada bocado.
          </p>
          <div className="features">
            <div className="feature">
              <span className="icon">🍰</span>
              <h3>Tortas Artesanales</h3>
              <p>Diseñadas con creatividad y pasión para ocasiones especiales.</p>
            </div>
            <div className="feature">
              <span className="icon">🥧</span>
              <h3>Bocaditos Deliciosos</h3>
              <p>Pequeñas delicias perfectas para cualquier momento.</p>
            </div>
            <div className="feature">
              <span className="icon">🌟</span>
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