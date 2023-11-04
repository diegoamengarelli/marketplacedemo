import React from 'react';
import ProductDetails from './ProductDetails'; // Asegúrate de importar el componente ProductDetails

const productos = [
    {
        titulo: 'Producto 1',
        descripcion: 'Descripción del Producto 1',
        precio: '$50',
        vendedor: 'Vendedor 1',
        valoracion: 4.5,
        imagen: '../assets/img.svg',
    },
    {
        titulo: 'Producto 2',
        descripcion: 'Descripción del Producto 2',
        precio: '$30',
        vendedor: 'Vendedor 2',
        valoracion: 4.0,
        imagen: '../assets/img.svg',
    },
    {
        titulo: 'Producto 3',
        descripcion: 'Descripción del Producto 3',
        precio: '$70',
        vendedor: 'Vendedor 3',
        valoracion: 4.8,
        imagen: '../assets/img.svg',
    },
    {
        titulo: 'Producto 1',
        descripcion: 'Descripción del Producto 1',
        precio: '$50',
        vendedor: 'Vendedor 1',
        valoracion: 4.5,
        imagen: '../assets/img.svg',
    },
    {
        titulo: 'Producto 2',
        descripcion: 'Descripción del Producto 2',
        precio: '$30',
        vendedor: 'Vendedor 2',
        valoracion: 4.0,
        imagen: '../assets/img.svg',
    },
    {
        titulo: 'Producto 3',
        descripcion: 'Descripción del Producto 3',
        precio: '$70',
        vendedor: 'Vendedor 3',
        valoracion: 4.8,
        imagen: '../assets/img.svg',
    },
];

const ProductList = () => {
    return (
      <div className="d-flex flex-wrap justify-content-between mt-4">
        <div className="d-flex align-items-center mb-3">
          <span className="me-2">Ordenar por:</span>
          <select className="form-select">
            <option value="precio_asc">Precio - Menor a Mayor</option>
            <option value="precio_desc">Precio - Mayor a Menor</option>
            <option value="valoracion">Valoración</option>
          </select>
        </div>
        <div className="d-flex flex-wrap justify-content-between w-100">
          {productos.map((producto, index) => (
            <ProductDetails
              key={index}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
              precio={producto.precio}
              vendedor={producto.vendedor}
              valoracion={producto.valoracion}
              imagen={producto.imagen}
              onAgregarCarrito={() => console.log('Agregado al carrito')}
              onVerDetalles={() => console.log('Ver detalles')}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;




