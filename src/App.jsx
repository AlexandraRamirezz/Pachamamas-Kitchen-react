import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='content-pages'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/category/:categoryId" element={<Menu />} />
          <Route path="/menu/dish/:id" element={<DishDetailContainer />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;