import { useCartContext } from "../../context/CartContext";
import PropTypes from "prop-types";
import "./ItemCart.css";
import Button from "react-bootstrap/Button";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <>
      <tr>
        <td>
          <img className="product-img" src={product.img} alt="alt" />
        </td>
        <td>
          <p>{product.nombre}</p>
        </td>
        <td>
          <p>{product.precio}</p>
        </td>
        <td>{product.quantity}</td>
        <td>{product.quantity * product.precio}</td>
        <td>
          <Button variant="danger" onClick={() => removeProduct(product.id)}>
            <b>x</b>
          </Button>
        </td>
      </tr>
    </>
  );
};

ItemCart.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ItemCart;
