import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProductosAdmin from "./pages/ProductosAdmin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/productos"
        element={
          <PrivateRoute>
            <ProductosAdmin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;