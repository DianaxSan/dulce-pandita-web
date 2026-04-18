import { useState } from "react";
import { Link } from "react-router-dom";
import { createProduct } from "../services/api";

function Admin() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const subirProducto = async () => {
    setError("");
    setStatus("");

    if (!nombre || !precio || !descripcion) {
      setError("Completa el nombre, precio y la descripción.");
      return;
    }

    if (!imagen) {
      setError("Selecciona una imagen para el producto.");
      return;
    }

    setStatus("Subiendo producto...");

    try {
      const formData = new FormData();
      formData.append("file", imagen);
      formData.append("upload_preset", "dulce_pandita");

      const res = await fetch("https://api.cloudinary.com/v1_1/dygpeaxs2/image/upload", {
        method: "POST",
        body: formData,
      });

        const data = await res.json();

        if (!data.secure_url) {
            throw new Error("Error subiendo imagen a Cloudinary");
        }

        const imageUrl = data.secure_url;

      await createProduct({
  nombre,
  precio,
  descripcion,
  imagen: imageUrl,
});
      if (!response.ok) {
        throw new Error("Error en el servidor");
      }

      setStatus("Producto creado con éxito 🚀");
      setNombre("");
      setPrecio("");
      setDescripcion("");
      setImagen(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      setError("No se pudo crear el producto. Revisa la consola y vuelve a intentar.");
      setStatus("");
    }
  };

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Dulce Pandita</h2>
          <span>Panel administrativo</span>
        </div>

        <nav className="admin-menu">
          <a href="#dashboard">Dashboard</a>
          <a href="#nuevo-producto">Productos</a>
          <a href="#pedidos">Pedidos</a>
          <a href="#configuracion">Configuración</a>
          <Link to="/">Web pública</Link>
        </nav>

        <div className="admin-quick">
          <h3>Atajos</h3>
          <button className="admin-button">Ver ventas</button>
          <button className="admin-button secondary">Soporte</button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Administración</h1>
            <p>Gestiona productos, pedidos y ajustes del negocio.</p>
          </div>
          <Link to="/" className="admin-link">
            Volver al sitio
          </Link>
        </header>

        <section className="admin-cards" id="dashboard">
          <article className="admin-card">
            <h3>Productos</h3>
            <p>24 activos</p>
          </article>
          <article className="admin-card">
            <h3>Pedidos</h3>
            <p>12 pendientes</p>
          </article>
          <article className="admin-card">
            <h3>Ingresos</h3>
            <p>S/ 1,250</p>
          </article>
        </section>

        <section className="admin-panel" id="nuevo-producto">
          <div className="admin-panel-header">
            <div>
              <h2>Agregar nuevo producto</h2>
              <p>Completa los datos del producto para publicarlo rápidamente.</p>
            </div>
          </div>

          <div className="admin-form-grid">
            <form
              className="admin-form"
              onSubmit={(e) => {
                e.preventDefault();
                subirProducto();
              }}
            >
              <div className="admin-form-group">
                <label>Nombre</label>
                <input
                  className="admin-input"
                  type="text"
                  value={nombre}
                  placeholder="Ej. Tortita de fresa"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label>Precio</label>
                <input
                  className="admin-input"
                  type="number"
                  value={precio}
                  placeholder="Ej. 35"
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>

              <div className="admin-form-group full">
                <label>Descripción</label>
                <textarea
                  className="admin-textarea"
                  value={descripcion}
                  placeholder="Describe el producto, sabores y detalles"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>

              <div className="admin-form-group full">
                <label>Imagen del producto</label>
                <input
                  className="admin-file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {preview && <img className="admin-preview" src={preview} alt="Vista previa" />}
              </div>

              <div className="admin-actions">
                <button type="submit" className="admin-button primary">
                  Guardar producto
                </button>
                <span className="admin-hint">Completa todos los campos y selecciona una imagen clara.</span>
              </div>

              {status && <p className="admin-status">{status}</p>}
              {error && <p className="admin-error">{error}</p>}
            </form>

            <aside className="admin-help">
              <h3>Consejos rápidos</h3>
              <p>Un buen producto vende más rápido. Incluye:</p>
              <ul>
                <li>Nombre claro y apetecible</li>
                <li>Precio competitivo</li>
                <li>Una descripción breve pero tentadora</li>
                <li>Imagen atractiva y bien iluminada</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="admin-section" id="pedidos">
          <h2>Pedidos recientes</h2>
          <p>Revisa aquí las últimas órdenes y mantén el control de las entregas.</p>
        </section>

        <section className="admin-section" id="configuracion">
          <h2>Configuración</h2>
          <p>Aquí podrás ajustar datos del negocio, horarios y contactos.</p>
        </section>
      </main>
    </div>
  );
}

export default Admin;