import React, { useState } from 'react';
import './ContactUs.css';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import sendimg from '../../assets/send.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope, } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.name) formErrors.name = 'required';
    else if (formData.name.length < 3) formErrors.name = 'Invalid name'
    if (!formData.email) {
      formErrors.email = 'required';
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }
    if (!formData.message) formErrors.message = 'required';

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      try {
        await axios.post('http://localhost:3001/newfeedbacks', formData);

        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          transition: Slide,
        });

        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } catch (error) {
        toast.error('Something went wrong. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          transition: Slide,
        });
      }
      finally {
        setLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  function copyToClipboard() {
    const phoneNumber = document.getElementById("phoneNumber").innerText;
    navigator.clipboard.writeText(phoneNumber)
    toast.success("Phone number copied!", {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light',
      transition: Slide,
    });
  }

  return (
    <div className="contact-us" id='Contact'>
      <h1>Contact me</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:{errors.name && <span className="error">{errors.name}</span>}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:{errors.email && <span className="error">{errors.email}</span>}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='ex: contact@gmail.com'
            value={formData.email}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className='message-container'><label htmlFor="message">Message:{errors.message && <span className="error">{errors.message}</span>}</label></div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
             placeholder='Describe here...'
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          
        </div>

        <button type="submit" className='submitbtn' disabled={loading}>{loading ? "Sending..." : <><img src={sendimg} alt="" className="sendicon" />Send Message</>}</button>
      </form>

      <ToastContainer />
      
    </div>
  );
};

export default ContactUs;
