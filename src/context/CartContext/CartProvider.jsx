import CartContext from "./CartContext";
import { useState } from "react";
export { CartContext };

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addDishes = (dish, quantity) => {
    if (isInCart(dish.id)) {
      setCart(
        cart.map((item) => 
          item.dish.id === dish.id
          ? {...item, quantity: item.quantity + quantity}
          : item
        )
      );
    } else {
      setCart([...cart, { dish, quantity }]);
    }
  }

  const isInCart = (dishId) => {
    return cart.some(item => item.dish.id === dishId)
  }

  const clearCart = () => {
    setCart([]);
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.dish.price * item.quantity, 0)
  }

  const getTotalDishes = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const removeDish = (dishId) => {
    setCart(cart.filter(item => item.dish.id !== dishId));
  }

  const buy = () => {
    clearCart();
  }

  return(
    <CartContext.Provider value={{
      cart,
      addDishes,
      isInCart,
      clearCart,
      getTotal,
      getTotalDishes,
      removeDish,
      buy
    }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;