import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './LoginForm.css';

const RegistroForm = () => {
    return (
        <div className="login-form-container">
            <h3>Registro</h3>
            <Form>
                <FormGroup controlId="nombre" className="mb-3">
                    <FormControl
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </FormGroup>
                <FormGroup controlId="email" className="mb-3">
                    <FormControl
                        type="email"
                        placeholder="Correo Electrónico"
                        required
                    />
                </FormGroup>
                <FormGroup controlId="password" className="mb-3">
                    <FormControl
                        type="password"
                        placeholder="Contraseña"
                        required
                    />
                    <Form.Text id="passwordHelpBlock" muted className="mb-3">
                        Debe contener al menos 8 caracteres, incluir letras mayúsculas y minúsculas, números y símbolos.
                    </Form.Text>
                </FormGroup>
                <FormGroup controlId="confirmPassword" className="mb-3">
                    <FormControl
                        type="password"
                        placeholder="Confirmar Contraseña"
                        required
                    />
                </FormGroup>
                <Button className="btn-login" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    );
};

export default RegistroForm;