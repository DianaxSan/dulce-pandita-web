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

      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>S/ {p.precio}</td>
              <td>{p.descripcion}</td>
              <td>
                <button onClick={() => handleDelete(p.id)} className="admin-button secondary">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;