import HeroSection from '../../components/HeroSection/HeroSection'
import './About.css'
import backgroundImage from '/src/assets/images/background-about.png';

const About = () => {
  return (
    <>
      <HeroSection
        backgroundImage={backgroundImage}
        title={'Information of the restaurant'}
        paragraph={null}
      />
    </>
  )
}

export default About