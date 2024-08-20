import './Home.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import backgroundImage from '/src/assets/images/background-home.png';

const Home = () => {
  return (
    <>
      <HeroSection
        backgroundImage={backgroundImage}
        title={'Food of the restaurant'}
        paragraph={'Welcome to Pachamamas Kitchen! We are your gateway to authentic Peruvian cuisine with a modern twist. From classic ceviche to innovative dishes, we offer a culinary journey through Perus diverse flavors. Come and taste the soul of Peru!'} />
      <div className='container-div-container'>
        <figure className='container-img-description'>
          <div className='img-description' />
        </figure>
        <div className='container-description'>
          <p className='description-message'>Pachamama's Kitchen serves a variety of authentic Peruvian dishes such as ceviche, lomo saltado, ají de gallina, and anticuchos. We also offer refreshing beverages like chicha morada and pisco sour, as well as a selection of local wines and beers.</p>
        </div>
      </div>
    </>
  )
}

export default Home