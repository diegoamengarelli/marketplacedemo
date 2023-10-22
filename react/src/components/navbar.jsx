import React from 'react';
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';

const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} alt="Logo" /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">PUBLICAR +</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
};
export default NavBar
