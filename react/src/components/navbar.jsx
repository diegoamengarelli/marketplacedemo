import React from 'react';
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const NavBar = () => {
  const tooltipProps = {
    placement: 'bottom', // Puedes ajustar la posición según tus necesidades
    delay: { show: 100, hide: 200 },
  };

  return (
    <Navbar className='nav-link-custom w-100'>
      <Container className='w-100 px-0 mr-0'>
        <Navbar.Brand href="/" className='mr-auto'> <img src={logo} alt="Logo" /></Navbar.Brand>
        <Nav className='ml-auto mr-0'>
          <OverlayTrigger overlay={<Tooltip id="favorites-tooltip" className="custom-tooltip">Favoritos</Tooltip>} {...tooltipProps}>
            <Nav.Link href="favoritos" className="nav-link-button">
              <i className="bi bi-heart-fill text-danger"></i>
            </Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip id="messages-tooltip" className="custom-tooltip">Mensajes</Tooltip>} {...tooltipProps}>
            <Nav.Link href="#" className="nav-link-button">
              <i className="bi bi-chat-left-dots-fill text-success"></i>
            </Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip id="publish-tooltip" className="custom-tooltip">Publicar</Tooltip>} {...tooltipProps}>
            <Nav.Link href="publicar" className="nav-link-button" style={{ color: 'black' }}>
              +PUBLICAR
            </Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip id="login-tooltip" className="custom-tooltip">Ingresar con cuenta</Tooltip>} {...tooltipProps}>
            <Nav.Link href="login" className="nav-link-button">
              Ingresar
            </Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger overlay={<Tooltip id="signup-tooltip" className="custom-tooltip">Crear cuenta nueva</Tooltip>} {...tooltipProps}>
            <Nav.Link href="register" className="nav-link-button">
              Crear cuenta
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

