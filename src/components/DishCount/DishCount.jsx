import { useState } from 'react';
import './DishCount.css'

const DishCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
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
          <button onClick={() => onAdd(count)}>Add to cart</button>
        </div>
      </div>
  );
};

export default DishCount;