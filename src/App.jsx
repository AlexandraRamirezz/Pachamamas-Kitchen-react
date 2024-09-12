import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Reservations from './pages/Reservations/Reservations';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './pages/NotFound/NotFound';
import DishDetailContainer from './components/DishDetailContainer/DishDetailContainer';
import CartProvider from './context/CartContext/CartProvider';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isCheckout = location.pathname === "/checkout";
  return (
    <>
      {!isCheckout && <Navbar />}
      <div className={`content-pages ${isCheckout ? 'checkout' : ''}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/category/:categoryId" element={<Menu />} />
          <Route path="/menu/dish/:id" element={<DishDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isCheckout && <Footer />}
      </div>
    </>
  );
}

export default App;