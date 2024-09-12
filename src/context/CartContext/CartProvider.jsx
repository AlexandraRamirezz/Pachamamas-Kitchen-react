import { doc, updateDoc } from "firebase/firestore";
import CartContext from "./CartContext";
import { useState } from "react";
import { db } from "../../main";
export { CartContext };

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateDishStock = async (dishId, newStock) => {
    const dishRef = doc(db, "dishes", dishId);
    const availability = newStock > 0;
    await updateDoc(dishRef, {
      stock: newStock,
      availability: availability
    });
  };

  const addDishes = (dish, quantity) => {
    const existingDish = cart.find(item => item.dish.id === dish.id);
    const newStock = dish.stock - quantity;
    if (existingDish) {
      const newQuantity = existingDish.quantity + quantity;
      if (newQuantity <= dish.stock) {
        setCart(
          cart.map(item =>
            item.dish.id === dish.id
              ? { ...item, quantity: newQuantity }
              : item
          )
        );
        updateDishStock(dish.id, newStock);
      }
    } else {
      if (quantity <= dish.stock) {
        setCart([...cart, { dish, quantity }]);
        updateDishStock(dish.id, newStock);
      }
    }
  };

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

  return(
    <CartContext.Provider value={{
      cart,
      addDishes,
      isInCart,
      clearCart,
      getTotal,
      getTotalDishes,
      removeDish,
    }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;