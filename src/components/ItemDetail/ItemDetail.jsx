import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCartContext } from "../../context/CartContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Counter from "../Counter/Counter";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(producto, quantity);
    console.log(`compraste ${quantity} unidades`);
  };

  return (
    <>
      <Container key={producto.id} className="card-container">
        <Row>
          <Col sm={4} className="img-container">
            <Card.Img variant="" src={producto.img} />
          </Col>
          <Col sm={8} className="detail-container">
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text className="detail-description">
                {producto.descripcion}
              </Card.Text>
              <Card.Text className="detail-precio">
                Precio c\u: ${producto.precio}
              </Card.Text>
              <div className="addToCart-container">
                {goToCart ? (
                  <div>
                    <Link to={"/"}>
                      <Button variant="primary" className="me-1">
                        Seguir comprando
                      </Button>
                    </Link>
                    <Link to="/cart">
                      <Button variant="success">Terminar Compra</Button>
                    </Link>
                  </div>
                ) : (
                  <Counter stock={producto.stock} onAdd={onAdd} />
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ItemDetail.propTypes = {
  producto: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ItemDetail;
