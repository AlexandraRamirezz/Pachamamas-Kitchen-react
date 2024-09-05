import './Dish.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';

const Dish = ({ dish }) => {
  const { addDishes } = useContext(CartContext);

  const handleAddToCart = () => {
    addDishes(dish, 1);
  };

  return (
      <div key={dish.id} className="card">
        <Link to={`/menu/dish/${dish.id}`}>
          <img src={dish.image} alt={dish.name} />
        </Link>
        <h3>{dish.name}</h3>
        <p>S/ {dish.price.toFixed(2)}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
  );
};

export default Dish;