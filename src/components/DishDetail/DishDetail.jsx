import './DishDetail.css';
import DishCount from '../DishCount/DishCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';

const DishDetail = ({ dish }) => {
  const { addDishes, cart } = useContext(CartContext);

  const getDishQuantityInCart = () => {
    const cartItem = cart.find(item => item.dish.id === dish.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const onAdd = (quantity) => {
    addDishes(dish, quantity);
  };

  const availableStock = dish.stock - getDishQuantityInCart();

  return (
    <>
      <div className='back-menu'>
        <Link to="/menu">
          <i className="fa-solid fa-arrow-left"></i><p>BACK TO MENU</p>
        </Link>
      </div>
      <div className='dish-detail-container'>
        <div className='detail-container'>
          <div className='detail-image'>
            <img src={dish.image} alt={dish.name} />
          </div>
          <div className='detail-actions'>
            <div className='name-dish'>
              <h2>{dish.name}</h2>
            </div>
            <div>
              <p><span>Category: </span>{dish.category}</p>
            </div>
            <p className='price'>S/. {dish.price.toFixed(2)}</p>
            <p className='stock'>Stock: {availableStock}</p>
            <DishCount initial={1} stock={availableStock} onAdd={onAdd} />
          </div>
          <div className='extra-details-container'>
            <div>
              <p><span>Description: </span>{dish.description}</p>
            </div>
            <div>
              <p><span>Ingredients:</span></p>
              <ul className='ingredients-list'>
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <p><span>Calories: </span>{dish.calories}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishDetail;