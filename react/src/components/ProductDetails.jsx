import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductDetails = ({ titulo, descripcion, precio, vendedor, valoracion, imagen, onAgregarCarrito, onVerDetalles }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>Precio: {precio}</Card.Text>
        <Card.Text>Vendedor: {vendedor}</Card.Text>
        <Card.Text>Valoración del Vendedor: {valoracion}</Card.Text>
        <Button variant="primary" onClick={onAgregarCarrito}>Agregar al Carrito</Button>
        <Button variant="link" onClick={onVerDetalles}>Ver Detalles</Button>
        <i className="bi bi-chat"></i> {/* Icono de comentarios */}
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
