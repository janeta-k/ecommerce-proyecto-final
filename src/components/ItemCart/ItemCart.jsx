import { useCartContext } from "../../context/CartContext"
import PropTypes from "prop-types";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
  return (
    <div>
        <img src={product.img} alt="alt" />
        <div>
            <p>titulo: {product.nombre}</p>
            <p>cantidad: {product.quantity}</p>
            <p>precio u.: {product.precio}</p>
            <p>id: {product.id}</p>
            <p>subtotal: {product.quantity * product.precio}</p>

            <button onClick={() => removeProduct(product.id)}>Eliminar</button>

        </div>
      
    </div>
  );
};

ItemCart.propTypes = {
  product: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
  ])
};

export default ItemCart;
