import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/herosection/HeroSection'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='navbar-content'>
        <div className='content-pages'>
          <HeroSection />
          <ItemListContainer greeting="Welcome to Pachamama's Kitchen! We're your gateway to authentic Peruvian cuisine with a modern twist. From classic ceviche to innovative dishes, we offer a culinary journey through Peru's diverse flavors. Come and taste the soul of Peru!" />
          <div className='container-div-container'>
            <figure className='container-img-description'>
              <div className='img-description'/>
            </figure>
            <div className='container-description'>
              <p className='description-message'>Pachamama's Kitchen serves a variety of authentic Peruvian dishes such as ceviche, lomo saltado, ají de gallina, and anticuchos. We also offer refreshing beverages like chicha morada and pisco sour, as well as a selection of local wines and beers.</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App