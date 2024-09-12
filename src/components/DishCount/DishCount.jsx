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
        <button
          onClick={decrement}
          disabled={count <= initial}
          style={{ opacity: count <= initial ? 0.5 : 1 }}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <p className='count-style'>{count}</p>
        <button
          onClick={increment}
          disabled={count >= stock}
          style={{ opacity: count >= stock ? 0.5 : 1 }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className='btn-container'>
        <button
          onClick={() => onAdd(count)} disabled={stock === 0} style={{ opacity: stock === 0 ? 0.5 : 1 }}>
          {stock === 0 ? "Out of stock" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default DishCount;