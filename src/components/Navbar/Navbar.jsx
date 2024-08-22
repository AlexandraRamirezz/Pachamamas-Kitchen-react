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
            <NavLink to="/home" className='link' activeClassName="active">HOME</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to="/about" className='link' activeClassName="active">ABOUT</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to="/menu" className='link' activeClassName="active">MENU</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to="/reservations" className='link' activeClassName="active">RESERVATIONS</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to="/contact-us" className='link' activeClassName="active">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar