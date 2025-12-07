import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';


function Contact() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        firstName: '',
        lastName: ' ',
        contactNumber: '',
        email: '',
        message: '',
    });
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/');
  };

  return (
    <div className="contact-page">
      {}
      <div className="contact-panel">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> Fatema Sarwar</p>
        <p><strong>Phone:</strong> (905)609-0136</p>
        <p><strong>Email:</strong> fatema.skazmi@gmail.com</p>
        <p><strong>Address:</strong> 1384 Monarch Dr. Kingston ON</p>
      </div>

    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />

        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;