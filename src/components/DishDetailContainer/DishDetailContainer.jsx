import './DishDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DishDetail from '../DishDetail/DishDetail';
import Spinner from '../Spinner/Spinner';
import { getDoc, doc, getFirestore } from 'firebase/firestore';

const DishDetailContainer = () => {
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const newDoc = doc(db, 'dish', id);

    getDoc(newDoc)
      .then((response) => {
        const data = response.data();
        const newDish = { id: response.id, ...data };
        setDish(newDish);
      })
      .catch((error) => console.error("Error searching dishes", error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container">
      {loading || !dish ? <Spinner /> : <DishDetail dish={dish} />}
    </div>
  );
};

export default DishDetailContainer;