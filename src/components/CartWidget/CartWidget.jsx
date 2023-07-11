import { useCartContext } from "../../context/CartContext";
import { FaCartPlus } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div className="cartIcon-container p-3">
      <FaCartPlus className="cartIcon" />
      <span className="cart-number">{totalProducts()}</span>
    </div>
  );
};

export default CartWidget;
