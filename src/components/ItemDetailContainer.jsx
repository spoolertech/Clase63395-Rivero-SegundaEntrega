import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useCart();


  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [id]);

  if (!item) return <div>Cargando...</div>;

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={item.image} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>Precio: ${item.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => addToCart(item)}>
                Agregar al carrito
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetailContainer;
