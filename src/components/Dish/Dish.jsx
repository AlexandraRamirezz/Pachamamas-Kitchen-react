import './Dish.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';

const Dish = ({ dish }) => {
  const { addDishes, cart } = useContext(CartContext);

  const handleAddToCart = () => {
    addDishes(dish, 1);
  };

  const getDishQuantityInCart = () => {
    const cartItem = cart.find(item => item.dish.id === dish.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const isOutOfStock = getDishQuantityInCart() >= dish.stock;

  return (
    <div key={dish.id} className="card">
      <Link to={`/menu/dish/${dish.id}`}>
        <img src={dish.image} alt={dish.name} />
      </Link>
      <h3>{dish.name}</h3>
      <p>S/ {dish.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        disabled={isOutOfStock || dish.stock === 0}
        style={{ opacity: isOutOfStock || dish.stock === 0 ? 0.5 : 1 }}
      >
        {isOutOfStock || dish.stock === 0 ? "Out of stock" : "Add to cart"}
      </button>
    </div>
  );
};

export default Dish;