import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, FormCheck } from "react-bootstrap";
import "./PublicationForm.css";

const PublicationForm = ({ onSubmit }) => {
    return (
        <div className="formulario-container">
            <Form>
                <h3>Datos de tu anuncio</h3>

                <FormGroup controlId="title" className="mb-3">
                    <FormLabel>Título de la publicación</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="Ingresa un título"
                    />
                </FormGroup>

                <FormGroup controlId="category" className="mb-3">
                    <FormLabel>Categoría</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="Selecciona una categoría"
                    />
                </FormGroup>

                <FormGroup controlId="descriptionBrief">
                    <FormLabel>Descripción breve</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="Ingresa una descripción breve"
                        maxLength={200}
                    />
                </FormGroup>

                <FormGroup controlId="descriptionComplete" className="mb-3">
                    <FormLabel>Descripción completa (opcional)</FormLabel>
                    <FormControl
                        as="textarea"
                        placeholder="Ingresa una descripción completa"
                        maxLength={500}
                        rows={3}
                    />
                </FormGroup>

                <FormGroup controlId="photos" className="mb-3">
                    <FormLabel>Fotos</FormLabel>
                    <FormControl
                        type="file"
                        multiple
                        max="5"
                    />
                </FormGroup>

                <FormGroup controlId="type" className="mb-3">
                    <FormCheck
                        inline
                        label="Ofrecer/vender"
                        type='radio'
                        id={'ofrecer-vender'}
                        name="tipo"
                    />
                    <FormCheck
                        inline
                        label="Buscar/comprar"
                        type='radio'
                        id={'buscar-comprar'}
                        name="tipo"
                    />
                </FormGroup>

                <FormGroup controlId="location" className="mb-3">
                    <FormLabel>Ubicación</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="Ingresa una ubicación"
                    />
                </FormGroup>

                <FormGroup controlId="price" className="mb-3">
                    <FormLabel>Precio</FormLabel>
                    <FormControl
                        type="number"
                        placeholder="Ingresa un precio"
                    />
                </FormGroup>

                <FormGroup controlId="tel" className="mb-4">
                    <FormLabel>Teléfono (opcional)</FormLabel>
                    <FormControl
                        type="number"
                        placeholder="Ingresa un teléfono"
                    />
                    <Form.Text id="passwordHelpBlock" muted className="mb-3">
                        Te recomendamos no publicar tu teléfono, nuestro chat es el canal más seguro.
                    </Form.Text>
                </FormGroup>

                <div className="d-flex justify-content-between">
                    <Button variant="secondary" type="button" className="float-start">
                        <i className="bi bi-arrow-left"></i> Atrás
                    </Button> {/* Botón Atrás con ícono */}
                    <Button type="submit" className="float-end btn-login">+ Publicar</Button>
                </div>
            </Form>
        </div>
    );
};

export default PublicationForm;
