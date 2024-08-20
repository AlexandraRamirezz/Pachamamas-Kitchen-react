import HeroSection from '../../components/HeroSection/HeroSection'
import './ContactUs.css'
import backgroundImage from '/src/assets/images/background-contactus.png';

const ContactUs = () => {
  return (
    <>
      <HeroSection
        backgroundImage={backgroundImage}
        title={'Contact of the restaurant'}
        paragraph={null}
      />
    </>
  )
}

export default ContactUs