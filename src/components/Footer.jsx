import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DiAndroid } from 'react-icons/di';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <div>
              <DiAndroid size={30} color="#4CAF50" />
            </div>
            <p>&copy; 2024 FRIMA S.A. Todos los derechos reservados.</p>
            <p>Hecho por Juan Pablo Rivero en React - Clase 63395 - Segunda Entrega.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;