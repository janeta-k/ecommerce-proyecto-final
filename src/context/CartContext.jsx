import { createContext, useState, useContext } from "react";
const CartContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, newQuantity) => {
      const newCart = cart.filter(prod => prod.id !== item.id);
      newCart.push({...item, quantity: newQuantity});
      setCart(newCart);
    };
    
    //const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const totalPrice = () => {
      let total = cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
      return total;
    };
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    
    console.log("carrito: ", cart);

  return (
    <CartContext.Provider value={{
      isInCart,
      removeProduct,
      addToCart,
      totalPrice,
      totalProducts,
      cart,
      setCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

