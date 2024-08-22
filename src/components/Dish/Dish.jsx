import { Link } from 'react-router-dom';
import './Dish.css'

const Dish = ({ dish }) => {
  return (
      <div key={dish.id} className="card">
        <Link to={`/menu/dish/${dish.id}`}>
          <img src={dish.image} alt={dish.name} />
        </Link>
        <h3>{dish.name}</h3>
        <p>S/ {dish.price.toFixed(2)}</p>
        <button type='submit'>
          Add to cart
        </button>
      </div>
  );
};

export default Dish;