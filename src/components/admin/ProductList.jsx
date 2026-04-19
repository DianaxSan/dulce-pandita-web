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
    <div>
      <h2>Lista de productos</h2>

      {productos.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <h3>{p.nombre}</h3>
          <p>S/ {p.precio}</p>

          <button onClick={() => handleDelete(p.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;