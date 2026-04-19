import ProductForm from "../components/admin/ProductForm";
import ProductList from "../components/admin/ProductList";
import useProductos from "../hooks/useProductos";

function AdminProductos() {
  const { productos, loading, loadProductos } = useProductos();

  return (
    <div className="admin-main">
      <h1>Gestión de Productos</h1>

      <ProductForm onSuccess={loadProductos} />

      <ProductList
        productos={productos}
        loading={loading}
        onRefresh={loadProductos}
      />
    </div>
  );
}

export default AdminProductos;