import { deleteProduct } from "../../services/api";

function ProductList({ productos, loading, onRefresh }) {
  if (loading) return <p>Cargando...</p>;

  const handleDelete = async (id) => {
    if (confirm("¿Eliminar producto?")) {
      await deleteProduct(id);
      onRefresh();
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h2>Lista de productos</h2>
      </div>

      {productos.map((p) => (
        <div key={p.id} className="admin-card">
          <h3>{p.nombre}</h3>
          <p>S/ {p.precio}</p>
          <button onClick={() => handleDelete(p.id)} className="admin-button secondary">
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;