import HeroSection from '../../components/HeroSection/HeroSection'
import './About.css'

const About = () => {
  return (
    <>
      <HeroSection
        backgroundImage={'/src/assets/images/background-about.png'}
        title={'Information of the restaurant'}
        paragraph={null}
      />
    </>
  )
}

export default About