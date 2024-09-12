import { useEffect, useState } from 'react';
import './DishListContainer.css';
import DishList from '../DishList/DishList';
import Spinner from '../Spinner/Spinner';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const DishListContainer = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const myDishes = categoryId
      ? query(collection(db, 'dish'), where('category', '==', categoryId))
      : collection(db, 'dish');

      getDocs(myDishes)
        .then((response) => {
          const newDishes = response.docs.map((doc) => {
            const data = doc.data();
            if (data.stock === 0) {
              data.availability = false;
            }
            return { id: doc.id, ...data };
        });
        setDishes(newDishes);
        })
        .catch((error) => console.error("Error searching dishes", error))
        .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container">
      {loading ? <Spinner /> : <DishList dishes={dishes} />}
    </div>
  );
};

export default DishListContainer;