import { FaWhatsapp } from "react-icons/fa";
import useProductos from "../hooks/useProductos";
import MainLayout from "../layouts/MainLayout";

function Home() {
  const { productos, loading } = useProductos();

  return (
    <MainLayout>

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
          <p>
            En Dulce Pandita creamos deliciosas tortas y bocaditos que hacen tus momentos especiales aún más dulces.
          </p>
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
                      <span className="emoji">🍰</span>
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