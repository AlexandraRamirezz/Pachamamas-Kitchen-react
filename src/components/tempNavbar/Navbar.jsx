import { Link } from 'react-router-dom'
import './Navbar.css'
import CartWidget from '../tempCartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <figure className='container-logo'>
          <Link to={"/home"}>
            <div className='img-logo'></div>
          </Link>
          <div className='img-logo-name'></div>
        </figure>
      </div>
      <div className='navbar-links'>
        <ul>
          <li className='nav-link'>
            <Link to="/home">HOME</Link>
          </li>
          <li className='nav-link'>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className='nav-link'>
            <Link to="/menu">MENU</Link>
          </li>
          <li className='nav-link'>
            <Link to="/reservations">RESERVATIONS</Link>
          </li>
          <li className='nav-link'>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar