import React from 'react';
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <Form>
                <h3>Iniciar Sesión</h3>
                <FormGroup controlId="email" className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <FormControl
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                    />
                </FormGroup>
                <FormGroup controlId="password" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <FormControl
                        type="password"
                        placeholder="Ingresa tu contraseña"
                    />
                </FormGroup>
                <Button className="btn-login" type="submit">Iniciar Sesión</Button>
            </Form>
        </div>
    );
};

export default LoginForm;