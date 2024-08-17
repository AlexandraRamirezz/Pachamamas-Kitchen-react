import { useState } from 'react';
import './DishCount.css'

const DishCount = ({stock}) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const addToCart = () => {
    alert(`${count} dishes were added to the cart`)
  }

  return (
      <div className='dish-count-container'>
        <div className='count-container'>
          <button onClick={decrement}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <p className='count-style'>{count}</p>
          <button onClick={increment}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className='btn-container'>
          <button onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
  );
};

export default DishCount;