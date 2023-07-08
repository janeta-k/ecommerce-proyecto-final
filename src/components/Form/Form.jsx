import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({existeId}) => {
    const { cart, totalPrice} = useCartContext();
    const [orderId, setOrderId] = useState(null);
    console.log("order ID: ", orderId)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");

    let existOrderId = false
    if(orderId != ""){
        existOrderId = true
    }

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
    };
    const order = {
        buyer: {nombre: name, email: email, contacto: phone},
        items: cart,
        total: totalPrice()
    };
    const ordersCollection = collection(db, "orden");

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nombre y Apellido"
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Número de teléfono"
                onChange={(e) => setPhone(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Repite tu email"
                onChange={(e) => setCheckEmail(e.target.value)}
            />
            {
                email == checkEmail && email != "" && orderId == null ? <button type="submit" onClick={() => existeId(existOrderId)} className="boton-enviar">Enviar</button> : ""
            }
            
            
        </form>
        <p>Nro de orden: {orderId}</p>
    </div>
  );
};

Form.propTypes = {
    existeId: PropTypes.func
};

export default Form;
