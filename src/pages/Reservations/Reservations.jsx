import HeroSection from '../../components/HeroSection/HeroSection'
import './Reservations.css'
import backgroundImage from '/src/assets/images/background-reservations.png';

const Reservations = () => {
  return (
    <>
      <HeroSection
        backgroundImage={backgroundImage}
        title={'Reservations of the restaurant'}
        paragraph={null}
      />
    </>
  )
}

export default Reservations