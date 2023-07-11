import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../../components/ItemCart/ItemCart";
import Form from "../../components/Form/CartForm";
import "./ShoppingCart.css";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

//Estilos del modal
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ShoppingCart = () => {
  const { cart, totalPrice, setCart } = useCartContext();

  const [existeOrderId, setExisteOrderId] = useState(false);

  const comprobarSiExisteId = (booleano) => {
    setExisteOrderId(booleano);
  };

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const cerrar = () => {
    setShow(false);
    setCart([]);
  };

  const handleShow = () => setShow(true);

  if (cart.length === 0) {
    return (
      <div className="sin-elementos-container">
        <h2 className="mt-5">No hay elementos en tu carrito</h2>
        <Link to="/">
          <Button variant="info" className="mt-5">
            Seguir comprando
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <Container className="text-center">
      <h2 className="mt-2 mb-5">Tu carrito de compras</h2>
      <Table striped>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Nombre Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
        </tbody>
      </Table>

      <div>
        <h4 className="mb-4">Precio Total: ${totalPrice()}</h4>
        <Button variant="primary" onClick={handleShow} className="mb-5 me-2">
          Finalizar Compra
        </Button>
      </div>

      <Link to={"/"}>
        <Button variant="success" className="mb-5 me-2">
          Seguir Comprando
        </Button>
      </Link>

      {/* Modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Formulario de compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form existeId={comprobarSiExisteId} />
        </Modal.Body>
        {existeOrderId ? (
          <Modal.Footer>
            <Link to={"/"}>
              <Button variant="success" onClick={cerrar}>
                Confirmar
              </Button>
            </Link>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Volver
            </Button>
          </Modal.Footer>
        )}
      </Modal>

      <Button variant="danger" className="mb-5" onClick={() => setCart([])}>
        Vaciar Carrito
      </Button>
    </Container>
  );
};

export default ShoppingCart;
