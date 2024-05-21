import imageRectangle from "../assets/Rectangle 4.png";
import { Link } from "react-router-dom";
function Advert() {
  return (
    <section className="advert">

        <img src={imageRectangle}  alt="image" />
        <div className="text">
          <h3 style={{transition:'0.5s ease-in', transitionBehavior:'initial' }}>
            Sustainable Farming <br />
            Meets Technology: <br />
            Building a Greener Future <br />
            Invest In Plant Now (NOW!)
          </h3>
          <Link to='./contact'><button className="btn btn-primary">Learn More</button></Link>
        </div>

    </section>
  );
}

export default Advert;
