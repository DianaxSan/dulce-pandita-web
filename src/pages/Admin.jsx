import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Admin() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Dulce Pandita</h2>
          <span>Panel administrativo</span>
        </div>

        <nav className="admin-menu">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/productos">Productos</Link>
          <a href="#">Pedidos</a>
          <a href="#">Configuración</a>
          <Link to="/">Web pública</Link>
        </nav>

        <button
          className="logout-button"
          onClick={() => setShowLogoutModal(true)}
        >
          🚪 Cerrar sesión
        </button>
      </aside>

      <main className="admin-main">
        <h1>Dashboard</h1>
        <p>Bienvenida al panel de administración</p>
      </main>

      {showLogoutModal && (
        <div className="logout-modal">
          <div className="logout-modal-content">
            <p>¿Cerrar sesión?</p>
            <button onClick={() => setShowLogoutModal(false)}>
              Cancelar
            </button>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;