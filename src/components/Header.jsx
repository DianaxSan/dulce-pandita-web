import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Dulce Pandita" className="header-logo" />
            <h1>Dulce Pandita</h1>
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="/#inicio">Inicio</a>
            <a href="/#productos">Productos</a>
            <a href="/#nosotros">Nosotros</a>
            <a href="/#contacto">Contacto</a>
            <Link to="/admin">Admin</Link>
          </nav>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;