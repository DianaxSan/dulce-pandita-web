import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLayout({ children }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin-page">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Dulce Pandita</h2>
          <span>Panel administrativo</span>
        </div>

        <nav className="admin-menu">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/productos">Productos</Link>
          <a href="#pedidos">Pedidos</a>
          <a href="#configuracion">Configuración</a>
          <Link to="/">Web pública</Link>
        </nav>

        <button
          className="logout-button"
          onClick={() => setShowLogoutModal(true)}
          style={{ width: "100%", marginTop: "20px" }}
        >
          🚪 Cerrar sesión
        </button>
      </aside>

      {/* CONTENIDO */}
      <main className="admin-main">
        {children}
      </main>

      {/* MODAL */}
      {showLogoutModal && (
        <div className="logout-modal">
          <div className="logout-modal-content">
            <div className="logout-modal-header">¿Cerrar sesión?</div>
            <div className="logout-modal-message">
              Se cerrará tu sesión.
            </div>
            <div className="logout-modal-actions">
              <button onClick={() => setShowLogoutModal(false)}>
                Cancelar
              </button>
              <button onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminLayout;