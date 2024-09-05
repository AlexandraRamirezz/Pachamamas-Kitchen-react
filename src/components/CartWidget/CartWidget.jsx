import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';

const CartWidget = () => {
  const { getTotalDishes } = useContext(CartContext);

  return (
    <div className='nav-cart'>
      <i className="fas fa-shopping-cart"></i>
      { getTotalDishes() === 0 ? 0 : getTotalDishes() }
    </div>
  )
}

export default CartWidget