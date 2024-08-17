import HeroSection from '../../components/HeroSection/HeroSection'
import './Reservations.css'

const Reservations = () => {
  return (
    <>
      <HeroSection
        backgroundImage={'/src/assets/images/background-reservations.png'}
        title={'Reservations of the restaurant'}
        paragraph={null}
      />
    </>
  )
}

export default Reservations