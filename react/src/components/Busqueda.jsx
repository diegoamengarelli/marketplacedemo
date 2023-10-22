import React, { useState } from "react";
import { Navbar, Dropdown, FormControl, InputGroup, Button, Col, Row, } from "react-bootstrap";
import "./Busqueda.css";

const Busqueda = () => {
    const [ubicacion, setUbicacion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [busqueda, setBusqueda] = useState("");

    const handleCategoriaChange = (event) => {
        setCategoria(event);
    };

    const handleBusqueda = () => {
        // TODO: Implementar la lógica de búsqueda
    };

    return (
        <Navbar className="border-radius-10">
            <Row className="w-100">
                <Col sm={3}>
                    <InputGroup as={Col} sm={3} className="w-100">
                        <Button
                            variant="success"
                            onClick={handleBusqueda}
                        >
                            <i class="bi bi-geo-alt"></i>
                        </Button>
                        <FormControl
                            type="text"
                            placeholder="Ubicación"
                            value={ubicacion}
                            onChange={(e) => setUbicacion(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col sm={3}>
                    <Dropdown as={Col} sm={3} className="w-100">
                        <Dropdown.Toggle variant="success" className="w-100">
                            {categoria ? categoria : 'Categoría'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="success" className="w-100">
                            <Dropdown.Item onClick={() => handleCategoriaChange('Tecnología')}>Tecnología</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCategoriaChange('Ropa')}>Ropa</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCategoriaChange('Hogar')}>Hogar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={6}>
                    <InputGroup as={Col} className="w-100">
                        <FormControl
                            type="text"
                            placeholder="Buscar"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <Button
                            variant="success"
                            onClick={handleBusqueda}
                        >
                            <i className="bi bi-search" />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Navbar>
    );
};

export default Busqueda;


