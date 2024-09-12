import './CartDetail.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const CartDetail = () => {
  const { cart, getTotal, getTotalDishes, removeDish, clearCart } = useContext(CartContext);

  return (
    <div>
      <div className='title-cart-detail'>
        <h2>Cart details</h2>
      </div>
      <div className='content-cart-detail'>
        {getTotalDishes() === 0 ? (
          <div className='empty-cart-container'>
            <p className='empty-cart-message'>There are no dishes on the cart</p>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.dish.id} className='cart-detail-container'>
              <div className='cart-detail-image'>
                <img src={item.dish.image} alt={item.dish.name} />
              </div>
              <div className='cart-detail-text'>
                <h3>{item.dish.name}</h3>
                <p>Quantity: <span>{item.quantity}</span></p>
                <p>Unit price: <span>S/ {item.dish.price.toFixed(2)}</span></p>
                <p className='total-detail-per-dish'>Total: <span>S/ {(item.dish.price * item.quantity).toFixed(2)}</span></p>
              </div>
              <div>
                <button onClick={() => removeDish(item.dish.id)} className='icon-button'>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className='content-actions-detail'>
        <h3>Total dishes: {getTotalDishes()}</h3>
        <h3>Total to pay: S/ {getTotal().toFixed(2)}</h3>
        <button
          className='btn-clear'
          onClick={clearCart}
          disabled={getTotalDishes() === 0}
        >
          Clear cart
        </button>
        <Link to="/checkout">
          <button
            className='btn-buy'
            disabled={getTotalDishes() === 0}
          >
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetail;