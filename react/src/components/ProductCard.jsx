import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductCard.css';

const ProductCard = ({ titulo, descripcion, precio, vendedor, valoracion, imagen, onAgregarCarrito, onVerDetalles }) => {
  return (
    <Card className='product-card-container' style={{ width: '18rem', marginTop: '5px' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>Precio: {precio}</Card.Text>
        <Card.Text>Vendedor: {vendedor}</Card.Text>
        <Card.Text>
          Calificación del Vendedor: {valoracion}{' '}
          <i className="bi bi-star-fill"></i>
        </Card.Text>
        <Card.Text>
          <Button variant="success" onClick={onVerDetalles} style={{ marginRight: '5px' }}>Ver Detalles</Button>
          <i className="bi bi-chat-fill text-success" style={{ color: '#6cb48c' }}></i>
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default ProductCard;
