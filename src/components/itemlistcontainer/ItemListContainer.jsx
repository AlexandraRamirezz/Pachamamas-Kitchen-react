import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container-greeting'>
      <p className='greeting-message'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer