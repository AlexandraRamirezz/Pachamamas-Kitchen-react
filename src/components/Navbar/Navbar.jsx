import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

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
            <NavLink
              to="/home"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >HOME</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >ABOUT</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink
              to="/menu"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >MENU</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink
              to="/reservations"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >RESERVATIONS</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >CONTACT US</NavLink>
          </li>
        </ul>
      </div>
      <NavLink
        to="/cart"
        className={({ isActive }) => `cart-container ${isActive ? 'active' : ''}`}
        ><CartWidget />
      </NavLink>
    </nav>
  )
}

export default Navbar