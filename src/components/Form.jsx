import imageFarmer from '../assets/farmer 1.jpg';

function ContactForm() {
  return (
    <section className="form" id="contact">
      <div className="form-container">
        <div className="img">
          <img src={imageFarmer} alt="image" />
        </div>
        <form action="" method="get" className="form-content">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>

          <input type="submit" value="Let's talk!" className="submit-btn" />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
