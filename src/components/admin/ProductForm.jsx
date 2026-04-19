import { useState } from "react";
import { createProduct } from "../../services/api";

function ProductForm({ onSuccess }) {
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
    }
  };

  const subirProducto = async (e) => {
    e.preventDefault();

    setError("");
    setStatus("");

    if (!nombre || !precio || !descripcion || !imagen) {
      setError("Completa todos los campos");
      return;
    }

    setStatus("Subiendo...");

    try {
      const formData = new FormData();
      formData.append("file", imagen);
      formData.append("upload_preset", "dulce_pandita");

      const res = await fetch("https://api.cloudinary.com/v1_1/dygpeaxs2/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const imageUrl = data.secure_url;

      await createProduct({
        nombre,
        precio,
        descripcion,
        imagen: imageUrl,
      });

      onSuccess();

      setStatus("Producto creado");
      setNombre("");
      setPrecio("");
      setDescripcion("");
      setImagen(null);
      setPreview(null);
    } catch (err) {
      setError("Error al crear producto");
    }
  };

  return (
    <form onSubmit={subirProducto} className="admin-form">
      <h2>Nuevo producto</h2>

      <div className="admin-form-group">
        <label>Nombre</label>
        <input
          type="text"
          className="admin-input"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="admin-form-group">
        <label>Precio</label>
        <input
          type="number"
          className="admin-input"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>

      <div className="admin-form-group full">
        <label>Descripción</label>
        <textarea
          className="admin-textarea"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="admin-form-group">
        <label>Imagen</label>
        <input type="file" className="admin-file-input" onChange={handleImageChange} />
      </div>

      {preview && <img src={preview} className="admin-preview" />}

      <div className="admin-actions">
        <button type="submit" className="admin-button primary">Guardar</button>
      </div>

      {status && <p className="admin-status">{status}</p>}
      {error && <p className="admin-error">{error}</p>}
    </form>
  );
}

export default ProductForm;