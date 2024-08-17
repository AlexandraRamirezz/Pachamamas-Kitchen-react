import './HeroSection.css'

const HeroSection = (props) => {
  return (
    <>
      <div className="hero-section" style={{ backgroundImage: `url("${props.backgroundImage}")` }}>
        <div className='background-shadow'>
          <figure className='container-img-hero'>
            <div className='img-hero'></div>
          </figure>
          <div className='container-paragraph'>
            {props.paragraph && <p>{props.paragraph}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection