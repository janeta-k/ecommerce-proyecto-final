import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import "./Form.css";

const Form = () => {
    const { cart, totalPrice, setCart} = useCartContext();
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    

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
                type="text" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Número de teléfono"
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" >Enviar</button>
        </form>
        {/* puedo hacer un modal que muestre la id una vez se presiona el botón "finalizar compra", además de vaciar el 
        carrito. NANANAN ve el proyecto, cuando cierra el modal se borra lo del carrito xd */}
        <p>Nro de orden: {orderId}</p>
    </div>
  );
};

export default Form;
