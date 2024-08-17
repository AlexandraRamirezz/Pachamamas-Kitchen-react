import './DishDetail.css';
import DishCount from '../DishCount/DishCount';
import { Link } from 'react-router-dom';

const DishDetail = ({ dish }) => {
  if (!dish) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='detail-container'>
        <div className='detail-info'>
          <div className='back-menu'>
            <Link to="/menu">
              <i className="fa-solid fa-arrow-left"></i> BACK TO MENU
            </Link>
          </div>
          <div className='container-image'>
            <img src={dish.image} alt={dish.name} />
          </div>
        </div>
        <div className='detail-actions'>
          <div className='name-dish'>
            <h2>{dish.name}</h2>
          </div>
          <div>
          <p>Ingredients:</p>
            <ul className='ingredients-list'>
              {dish.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
      </div>
          <p className='price'>S/. {dish.price}</p>
          <p className='stock'>Stock: {dish.stock}</p>
          <DishCount initial={1} stock={dish.stock} />
        </div>
      </div>
      <div className='extra-details-container'>
        <p>Description: {dish.description}</p>
        <p>Calories: {dish.calories}</p>
      </div>
    </>
  );
};

export default DishDetail;