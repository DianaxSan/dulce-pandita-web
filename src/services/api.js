
const API_URL = "https://backend-pandi.onrender.com";

// LOGIN
export const loginAdmin = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return response.json();
};

//PRODUCTOS
export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/productos`);
  const data = await res.json();
  return data.productos;
};

export const createProduct = async (product) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // 🔐 IMPORTANTE
    },
    body: JSON.stringify(product),
  });

  if (response.status === 401) {
  localStorage.removeItem("token");
  window.location.href = "/login";
  return;
}

if (!response.ok) {
  throw new Error("Error al crear producto");
}

  return response.json();
};

// ACTUALIZAR
export const updateProduct = async (id, product) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error("Error al actualizar");
  return res.json();
};

// ELIMINAR
export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/productos/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Error al eliminar");
  return res.json();
};