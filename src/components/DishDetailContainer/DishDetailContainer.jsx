import './DishDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DishDetail from '../DishDetail/DishDetail';
import Spinner from '../Spinner/Spinner';

const DishDetailContainer = () => {
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const detailDish = data.find(p => p.id === Number(id));
        setDish(detailDish);
        setTimeout(() => {
          setLoading(false);
        }, 400);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container">
      {loading || !dish ? <Spinner /> : <DishDetail dish={dish} />}
    </div>
  );
};

export default DishDetailContainer;