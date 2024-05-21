import image from '../assets/image 1.png';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage:`url(${image})` }} id='home'>
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            the role of technology <br />
            in revolutionizing <br />
            agriculture
          </h1>

          <p>
            Welcome to PlantNow, your premier hub for everything green and
            sustainable! Explore a world of eco-conscious solutions and
            cultivate a greener tomorrow with us.
          </p>

          <div>
            <button className="btn1">
              <a href="#">Get Started</a>
            </button>

            <button className="btn2"><a href="#">Learn More</a></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
