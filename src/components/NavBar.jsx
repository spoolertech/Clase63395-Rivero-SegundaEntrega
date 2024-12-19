import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">FRIMA - Pastillas de Freno y Repuestos</Navbar.Brand> { }

        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/category/pastillas-de-freno">Pastillas de Freno</Nav.Link> { }
          <Nav.Link as={Link} to="/category/repuestos">Repuestos</Nav.Link> { }
          <Nav.Link as={Link} to="/category/accesorios">Accesorios</Nav.Link> { }
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link> { }
        </Nav>

        <CartWidget /> { }
      </Container>
    </Navbar>
  );
}

export default NavBar;
