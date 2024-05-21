import imageLettuce from "../assets/lettuce.jpg";

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="about-us-container">
        <div className="about-text">
          <h1>About Plant Now</h1>

          <p style={{textAlign:'justify'}}>
          At PlantNow, we celebrate the power of community and collaboration, 
          understanding that true transformation flourishes when shared values and visions come together.
          By actively engaging with local communities, environmental organizations,
           and dedicated gardening enthusiasts, we create a network of 
           like-minded individuals committed to a greener, more sustainable future.
          </p>

          <p>
          We believe in making gardening an inclusive experience, regardless of space or expertise.
           Whether you have a sprawling backyard or a cozy apartment balcony, our offerings cater to everyone. 
           Our team of seasoned experts provides invaluable resources, tips, 
          and guides to help you nurture your plants and create vibrant green sanctuaries.
          </p>
        </div>

        <div className="image">
          <img style={{height:'450px'}} src={imageLettuce} alt="Image" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
