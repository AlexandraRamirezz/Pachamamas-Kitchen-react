import './Cart.css'
import CartDetail from '../CartDetail/CartDetail';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <CartDetail cart={cart} />
    </>
  );
};

export default Cart;