import { useEffect, useState } from 'react';
import './DishListContainer.css';
import DishList from '../DishList/DishList';
import Spinner from '../Spinner/Spinner';

const DishListContainer = ({ categoryId }) => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const filteredCategory = categoryId ? data.filter(p => p.category === categoryId) : data;
        setDishes(filteredCategory);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className="container">
      {loading ? <Spinner /> : <DishList dishes={dishes} />}
    </div>
  );
};

export default DishListContainer;