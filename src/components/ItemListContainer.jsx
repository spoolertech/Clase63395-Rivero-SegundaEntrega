import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function ItemListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();

  const productosSimulados = [
    {
      id: 1,
      name: 'Pastilla de Freno A1',
      description: 'Pastillas de freno de alta calidad.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_861984-MLA44983270753_022021-F.webp',
      price: 98150,
    },
    {
      id: 2,
      name: 'Pastilla de Freno B2',
      description: 'Pastillas de freno para vehículos de mayor tamaño.',
      image: 'https://www.endado.com/blog/wp-content/uploads/2014/08/pastillas-de-freno.jpg',
      price: 98200,
    },
    {
      id: 3,
      name: 'Repuesto Filtro A',
      description: 'Filtro de repuesto para motores pequeños.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_864027-MLA74933188345_032024-F.webp',
      price: 87450,
    },
    {
      id: 4,
      name: 'Repuesto Filtro B',
      description: 'Filtro de repuesto para motores medianos.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_641548-MLA76125747468_052024-F.webp',
      price: 68970,
    },
    {
      id: 5,
      name: 'Accesorio A',
      description: 'Accesorio para vehículos de alta gama.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_894680-MLA73976098463_012024-F.webp',
      price: 1200000,
    },
    {
      id: 6,
      name: 'Accesorio B',
      description: 'Accesorio compatible con varios modelos de vehículos.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_889523-MLA47614382607_092021-F.webp',
      price: 130000,
    },
    {
      id: 7,
      name: 'Aceite Motor X',
      description: 'Aceite para motores de alto rendimiento.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_706039-MLA52024240196_102022-F.webp',
      price: 180000,
    },
    {
      id: 8,
      name: 'Aceite Motor Y',
      description: 'Aceite recomendado para vehículos deportivos.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_810860-MLA80339127592_112024-F.webp',
      price: 190000,
    },
  ];

  useEffect(() => {
    const fetchItems = () => {
      const filteredItems = productosSimulados.filter((producto) =>
        id ? producto.name.toLowerCase().includes(id.toLowerCase()) : true
      );
      setItems(filteredItems);
    };

    fetchItems();
  }, [id]);

  return (
    <Container>
      <h2>Productos en categoría: {id ? id : 'Todos'}</h2>
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>${item.price.toLocaleString('es-AR')}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(item)}>
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;
