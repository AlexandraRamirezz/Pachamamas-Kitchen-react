import './Menu.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DishListContainer from '../../components/DishListContainer/DishListContainer';
import HeroSection from '../../components/tempHeroSection/HeroSection';

const Menu = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'starters');

  useEffect(() => {
    if (!categoryId) {
      navigate('/menu/category/starters');
    }
  }, [categoryId, navigate]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/menu/category/${category}`);
  };

  const getCategoryClassName = (category) => {
    return category === selectedCategory ? 'category-container active' : 'category-container inactive';
  };

  return (
    <>
      <HeroSection
        backgroundImage={'/src/assets/images/background-menu.png'}
        title={'Food of the restaurant'}
        paragraph={null}
      />
      <div className='categories-container'>
        <div className={getCategoryClassName('starters')} onClick={() => handleCategoryClick('starters')}>
          <img src="/src/assets/images/starters.png" alt="Starters" />
          <p>Starters</p>
        </div>
        <div className={getCategoryClassName('creole-food')} onClick={() => handleCategoryClick('creole-food')}>
          <img src="/src/assets/images/creole-food.png" alt="Creole food" />
          <p>Creole food</p>
        </div>
        <div className={getCategoryClassName('seafood')} onClick={() => handleCategoryClick('seafood')}>
          <img src="/src/assets/images/seafood.png" alt="Seafood" />
          <p>Seafood</p>
        </div>
        <div className={getCategoryClassName('soup')} onClick={() => handleCategoryClick('soup')}>
          <img src="/src/assets/images/soup.png" alt="Soup" />
          <p>Soup</p>
        </div>
        <div className={getCategoryClassName('desserts')} onClick={() => handleCategoryClick('desserts')}>
          <img src="/src/assets/images/desserts.png" alt="Desserts" />
          <p>Desserts</p>
        </div>
        <div className={getCategoryClassName('drinks')} onClick={() => handleCategoryClick('drinks')}>
          <img src="/src/assets/images/drinks.png" alt="Drinks" />
          <p>Drinks</p>
        </div>
      </div>
      <DishListContainer categoryId={selectedCategory} />
    </>
  );
};

export default Menu;