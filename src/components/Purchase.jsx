import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import imageFarm from "../assets/farmer 2.jpg";

function ContactForm() {
  const [allFruits, setAllFruits] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    tel: "",
    service: "",
    fruits:'',
    numberOfSeedlings: "",
    totalcost: ""
  });
  const [formErrors, setFormErrors] = useState({}); // State for form errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dnbway1.onrender.com/api/fruits/showFruits");
        const data = await response.json();
        setAllFruits(data.listAllfruits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    const fruitPrice = parseFloat(formData.service.split(" - ")[1]); 
    const totalCost = quantity * fruitPrice || 0;
    setFormData({ ...formData, numberOfSeedlings: quantity, totalcost: totalCost });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://plantnow-backend.onrender.com/api/seedlings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log('Response:', data);
        
        window.location.href = "/Confirmation";
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

 
  const validateForm = () => {
    let errors = {};
    let isValid = true;


    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }


    if (!formData.address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }


    setFormErrors(errors);
    return isValid;
  };

  return (
 
    <section className="form">
      
      <div className="form-container">

        <div className="img">
          <img src={imageFarm} alt="image" />
        </div>
        <form onSubmit={handleSubmit} className="form-content" id="myForm">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" placeholder="Address" onChange={handleChange} />
            {formErrors.address && <span className="error">{formErrors.address}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="country">City</label>
            <input type="text" name="country" id="country" placeholder="Country" onChange={handleChange} />
          </div>
<div className="input-group">
  <label htmlFor="plantName">State</label>
  <select name="service" id="service" onChange={handleChange}>
    <option value="">Select your state</option>
    <option value="lagos">Lagos</option>
    <option value="abeokuta">Abeokuta</option>
    <option value="ibadan">Ibadan</option>
    <option value="kano">Kano</option>
    <option value="portharcourt">Port Harcourt</option>
    <option value="benin">Benin City</option>
    <option value="maidiguri">Maidiguri</option>
    <option value="zaria">Zaria</option>
    <option value="aba">Aba</option>
    <option value="oyo">Oyo</option>
    <option value="sokoto">Sokoto</option>
  </select>
</div>
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" placeholder="Country" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="tel">Telephone</label>
            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" onChange={handleChange} />
          </div>

          <div className="input-group">
  <label htmlFor="plantName">Plant name</label>
  <select name="service" id="service" onChange={handleChange}>
    <option value="">Select a fruit</option>
    <option value="apple">Apple £10</option>
    <option value="banana">Banana £20</option>
    <option value="orange">Orange £30</option>
    <option value="strawberry">Strawberry £40</option>
    <option value="mango">Mango £50</option>
    <option value="kiwi">Kiwi £60</option>
    <option value="grapes">Grapes £70</option>
    <option value="pineapple">Pineapple £80</option>
    <option value="peach">Peach £90</option>
    <option value="papaya">Papaya £100</option>
    <option value="dragonfruit">Dragon Fruit £110</option>
  </select>
</div>

          <div className="input-group">
            <label htmlFor="numberOfSeedlings">Quantity</label>
            <input type="number" name="numberOfSeedlings" id="numberOfSeedlings" placeholder="Quantity" onChange={handleQuantityChange} />
          </div>
          <button type="submit" className="submit-btn">
            <Link to='/'>Submit</Link>
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
