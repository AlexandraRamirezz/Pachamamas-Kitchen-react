import './DishList.css'
import Dish from '../Dish/Dish'

const DishList = ({ dishes }) => {
  return (
    <div className='card-container'>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish}/>
      ))}
    </div>
  )
}

export default DishList