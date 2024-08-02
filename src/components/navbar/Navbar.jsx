import './Navbar.css'
import CartWidget from '../cartwidget/CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <figure className='container-logo'>
          <div className='img-logo'></div>
          <div className='img-logo-name'></div>
        </figure>
      </div>
      <div className='navbar-links'>
        <ul>
          <li className='nav-link'>
            <a href="#">HOME</a>
          </li>
          <li className='nav-link'>
            <a href="#">ABOUT</a>
          </li>
          <li className='nav-link'>
            <a href="#">MENU</a>
          </li>
          <li className='nav-link'>
            <a href="#">RESERVATIONS</a>
          </li>
          <li className='nav-link'>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar