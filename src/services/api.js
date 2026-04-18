const BASE_URL = "https://backend-pandi.onrender.com";

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/productos`);
  const data = await res.json();
  return data.productos;
};

export const createProduct = async (product) => {
  const res = await fetch(`${BASE_URL}/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Error al crear producto");
  }

  return res.json();
};