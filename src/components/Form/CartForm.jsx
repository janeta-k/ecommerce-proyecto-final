import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import PropTypes from "prop-types";
import "./CartForm.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const CartForm = ({ existeId }) => {
  const { cart, totalPrice } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  console.log("order ID: ", orderId);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");

  let existOrderId = false;
  if (orderId != "") {
    existOrderId = true;
  }

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };
  const order = {
    buyer: { nombre: name, email: email, contacto: phone },
    items: cart,
    total: totalPrice(),
  };
  const ordersCollection = collection(db, "orden");

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label>Nombre y Apellido</Form.Label>

          <Form.Control
            type="text"
            placeholder="Escribe tu nombre y apellido"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label>Teléfono</Form.Label>

          <Form.Control
            type="tel"
            placeholder="Ingresa tu número telefónico"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label>Repite tu email</Form.Label>

          <Form.Control
            type="email"
            placeholder="Vuelve a ingresar tu email"
            onChange={(e) => setCheckEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          {email == checkEmail && email != "" && orderId == null ? (
            <Button
              type="submit"
              onClick={() => existeId(existOrderId)}
              className="boton-enviar mt-4"
            >
              Enviar
            </Button>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          {orderId != null ? (
            <div className="numero-orden-container">
              <h6>El número de tu orden es:</h6>
              <h5 className="mb-0">{orderId}</h5>
            </div>
          ) : (
            ""
          )}
        </Form.Group>
      </Form>
    </div>
  );
};

CartForm.propTypes = {
  existeId: PropTypes.func,
};

export default CartForm;
