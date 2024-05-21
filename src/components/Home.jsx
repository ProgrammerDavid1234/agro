import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Advert from "./Advert";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Advert />
      <Form />
      <Footer />
    </div>
  )
}

export default Home