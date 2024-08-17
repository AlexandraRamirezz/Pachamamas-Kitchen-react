import HeroSection from '../../components/tempHeroSection/HeroSection'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <HeroSection
        backgroundImage={'/src/assets/images/background-contactus.png'}
        title={'Contact of the restaurant'}
        paragraph={null}
      />
    </>
  )
}

export default ContactUs