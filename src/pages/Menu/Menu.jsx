import './Menu.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DishListContainer from '../../components/DishListContainer/DishListContainer';
import HeroSection from '../../components/HeroSection/HeroSection';
import backgroundImage from '/src/assets/images/background-menu.png';
import imageStarters from '/src/assets/images/starters.png';
import imageCriollofood from '/src/assets/images/criollo-food.png';
import imageSeafood from '/src/assets/images/seafood.png';
import imageSoups from '/src/assets/images/soups.png';
import imageDesserts from '/src/assets/images/desserts.png';
import imageDrinks from '/src/assets/images/drinks.png';

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
        backgroundImage={backgroundImage}
        title={'Food of the restaurant'}
        paragraph={null}
      />
      <div className='categories-container'>
        <div className={getCategoryClassName('starters')} onClick={() => handleCategoryClick('starters')}>
          <img src={imageStarters} alt="Starters" />
          <p>Starters</p>
        </div>
        <div className={getCategoryClassName('criollo-food')} onClick={() => handleCategoryClick('criollo-food')}>
          <img src={imageCriollofood} alt="Criollo food" />
          <p>Criollo food</p>
        </div>
        <div className={getCategoryClassName('seafood')} onClick={() => handleCategoryClick('seafood')}>
          <img src={imageSeafood} alt="Seafood" />
          <p>Seafood</p>
        </div>
        <div className={getCategoryClassName('soups')} onClick={() => handleCategoryClick('soups')}>
          <img src={imageSoups} alt="Soups" />
          <p>Soups</p>
        </div>
        <div className={getCategoryClassName('desserts')} onClick={() => handleCategoryClick('desserts')}>
          <img src={imageDesserts} alt="Desserts" />
          <p>Desserts</p>
        </div>
        <div className={getCategoryClassName('drinks')} onClick={() => handleCategoryClick('drinks')}>
          <img src={imageDrinks} alt="Drinks" />
          <p>Drinks</p>
        </div>
      </div>
      <DishListContainer categoryId={selectedCategory} />
    </>
  );
};

export default Menu;