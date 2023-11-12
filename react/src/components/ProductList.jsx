import React from 'react';
import ProductCard from './ProductCard';

const productos = [
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
  {
    titulo: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: '$50',
    vendedor: 'Vendedor 1',
    valoracion: 4.5,
    imagen: "https://via.placeholder.com/300x200",
  },
];

const ProductList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between mt-4 p-4">
      <div className="d-flex align-items-center mb-3">
        <span className="me-3">Ordenar por:</span>
        <select className="form-select">
          <option value="precio_asc">Precio - Menor a Mayor</option>
          <option value="precio_desc">Precio - Mayor a Menor</option>
          <option value="valoracion">Valoración</option>
        </select>
      </div>
      <div className="d-flex flex-wrap justify-content-between w-100">
        {productos.map((producto, index) => (
          <ProductCard
            key={index}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            precio={producto.precio}
            vendedor={producto.vendedor}
            valoracion={producto.valoracion}
            imagen={producto.imagen}
            onVerDetalles={() => console.log('Ver detalles')}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;




