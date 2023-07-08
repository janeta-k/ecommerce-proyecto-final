import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../../components/ItemCart/ItemCart";
import Form from "../../components/Form/Form";


//Estilos del modal
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShoppingCart = () => {
    const { cart, totalPrice, setCart } = useCartContext();
    console.log(cart)

    const [existeOrderId, setExisteOrderId] = useState(false)

    const comprobarSiExisteId = (booleano) =>{
      setExisteOrderId(booleano)
    }

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
      setCart([])
    }
    const handleShow = () => setShow(true);

    if(cart.length === 0) {
      return (
        <>
          <p>no hay elementos </p>
          <Link to="/">Seguir comprando</Link>
        </>
      );
    }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/> )
      }
      <p>
        total: {totalPrice()}
      </p>

      {/* Modal */}
      <Button variant="primary" onClick={handleShow}>
        Finalizar Compra
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form existeId={comprobarSiExisteId}/>
        </Modal.Body>
        {
          existeOrderId
          ?
          <Modal.Footer>
          <Link to={"/"}>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Link>
        </Modal.Footer>
        :
        ""
        }
        
      </Modal>
    </>
  );
};

export default ShoppingCart;
