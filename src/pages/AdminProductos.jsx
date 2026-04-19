import AdminLayout from "../layouts/AdminLayout";
import ProductForm from "../components/admin/ProductForm";
import ProductList from "../components/admin/ProductList";
import useProductos from "../hooks/useProductos";

function AdminProductos() {
  const { productos, loading, loadProductos } = useProductos();

  return (
    <AdminLayout>
      <h1>Gestión de Productos</h1>

      <ProductForm onSuccess={loadProductos} />

      <ProductList
        productos={productos}
        loading={loading}
        onRefresh={loadProductos}
      />
    </AdminLayout>
  );
}

export default AdminProductos;