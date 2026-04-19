import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProductos = async () => {
    try {
      const data = await fetchProducts();
      setProductos(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProductos();
  }, []);

  return { productos, loading, loadProductos };
};

export default useProductos;