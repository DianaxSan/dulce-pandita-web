import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
     <h3>{product.nombre}</h3>
<p>{product.descripcion}</p>
<p>Precio: S/ {product.precio}</p>

{product.imagen && (
  <img src={product.imagen} alt={product.nombre} />
)}
    </div>
  );
};

export default ProductCard;