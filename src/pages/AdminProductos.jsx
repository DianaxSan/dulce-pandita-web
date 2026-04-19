import AdminLayout from "../layouts/AdminLayout";
import ProductForm from "../components/admin/ProductForm";
import ProductList from "../components/admin/ProductList";
import useProductos from "../hooks/useProductos";

function AdminProductos() {
  const { productos, loading, loadProductos } = useProductos();

  return (
    <AdminLayout>
      <div className="admin-header">
        <h1>Gestión de Productos</h1>
      </div>

      <div className="admin-form-grid">
        <ProductForm onSuccess={loadProductos} />

        <ProductList
          productos={productos}
          loading={loading}
          onRefresh={loadProductos}
        />
      </div>
    </AdminLayout>
  );
}

export default AdminProductos;