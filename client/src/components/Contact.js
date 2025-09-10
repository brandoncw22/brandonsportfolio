/**
 * Contact: Contact form for inquiries.
 * - Manages simple controlled inputs and posts to API
 * - Clears form after successful submission
 */
import { useState } from "react";
import "./styling/Contact.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });
  // Submit data to backend
  const handleFormSubmit = (formData) => {
    axios.post(`${process.env.REACT_APP_API_URL}/api/contact/contact_submit`, formData, {
        headers: { "Content-Type": "application/json" }
    })
    .then((res) => {
        console.log("Server response:", res.data);
        setFormData({ name: "", email: "", phone: "", inquiry: "" }); // clear form
    })
    .catch(err => console.error("Error submitting form:", err));
};

  // Update form data on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData); // Send all values
  };

  return (
    <div id="contact-box">
      <form id="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name"
            type="text" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            id="email" 
            name="email"
            type="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            id="phone" 
            name="phone"
            type="tel" 
            placeholder="(123) 456-7890" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="inquiry">Inquiry</label>
          <textarea 
            id="inquiry" 
            name="inquiry"
            placeholder="Write out your inquiry" 
            value={formData.inquiry} 
            onChange={handleChange} 
          ></textarea>
        </div>

        <button type="submit" id="contact-submit">Send Message</button>
      </form>
      <div id="contact-info">
        <h2>📬 Get in Touch</h2>
        <p><strong>Email:</strong> brandon.c.wendell@gmail.com</p>
        <p><strong>Phone:</strong> (440) 925-1269</p>
        <p><strong>Location:</strong> Lakewood, OH</p>
      </div>
    </div>
  );
}

export default Contact;
