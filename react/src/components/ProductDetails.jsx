import React, { useState } from 'react';
import { Card, Carousel, Button, Badge, Accordion } from 'react-bootstrap';
import "./ProductDetails.css"

const ProductDetails = ({
    titulo,
    categoria,
    descripcionBreve,
    precio,
    descripcionCompleta,
    calificacionVendedor,
    ubicacion,
    telefono,
    onSendMessage,
    onAddToFavorites,
}) => {
    const [showFullDescription, setShowFullDescription] = useState(window.innerWidth > 768);

    const handleToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className='mt-4 p-4'>
            <Card className='product-details-container' style={{ flexDirection: 'row' }}>
                <Carousel style={{ width: '50%', display: 'flex', alignItems: 'center' }}>
                    {/* Imágenes de ejemplo */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x600"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x600"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x600"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    {/* ... Otras imágenes ... */}
                </Carousel>

                <Card.Body style={{ marginLeft: '20px', width: '50%' }}>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Categoría: {categoria}</Card.Subtitle>
                    <Card.Text>{descripcionBreve}</Card.Text>
                    <Card.Text>
                        <Badge bg="success">Precio: {precio}</Badge>
                    </Card.Text>
                    <Accordion defaultActiveKey={showFullDescription ? 'full-description' : 'short-description'}>
                        <Accordion.Item eventKey="full-description">
                            <Accordion.Header>
                                Mostrar Descripción Completa
                            </Accordion.Header>
                            <Accordion.Body>{descripcionCompleta}</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />
                    <Card.Text>
                        Calificación del Vendedor: {calificacionVendedor} <i className="bi bi-star-fill"></i>
                    </Card.Text>
                    <Card.Text>Ubicación: {ubicacion}</Card.Text>
                    {telefono && (
                        <Card.Text>
                            Teléfono: <Badge bg="secondary">{telefono}</Badge>
                        </Card.Text>
                    )}
                    <Button className='mr-4' variant="success" onClick={onSendMessage} style={{ marginRight: '5px' }}>
                        Enviar Mensaje
                    </Button>{' '}

                    <i className="bi bi-heart-fill text-danger"></i>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetails;
