import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCartContext } from "../../context/CartContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Counter from "../Counter/Counter";

import "./ItemDetail.css";

const ItemDetail = ({producto}) => {

  const [ goToCart, setGoToCart ] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(producto, quantity);
    console.log(`compraste ${quantity} unidades`)
  }

  return (
    <>
      <Container key={producto.id} className="card-container">
         <Row>
           <Col sm={4}>
             <Card.Img variant="top" src={producto.img} />
           </Col>
           <Col sm={8}>
             <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
               <Card.Text>${producto.precio}</Card.Text>
               <Card.Text>{producto.descripcion}</Card.Text>
              <div>
                {
                  goToCart ? <Link to="/cart">Terminar Compra</Link> : <Counter stock={producto.stock} onAdd={onAdd}/>
                }
            </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ItemDetail.propTypes = {
  producto: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
  ])
};

export default ItemDetail;