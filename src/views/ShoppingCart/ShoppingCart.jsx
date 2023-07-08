import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../../components/ItemCart/ItemCart";

const ShoppingCart = () => {
    const { cart, totalPrice } = useCartContext();
    console.log(cart)
    if(cart.length === 0) {
      return (
        <>
          <p>no hay elementos </p>
          <Link to="/">Seguir comprando</Link>
        </>
      );
    }
  return (
    <div>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/> )
      }
      <p>
        total: {totalPrice()}
      </p>
      <Link to={"/Checkout"}>
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
