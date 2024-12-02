import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sendimg from '../assets/send.png'
import contactimg from '../assets/Phone.png'
import emailimg from '../assets/email.png'
import locationimg from '../assets/location.png'
import zoomimg from '../assets/expand.png'

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
        await axios.post('http://localhost:3001/contactform', formData);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="project-contact-form">
        <div className='project-contact-container'>
          <div className='project-contact-left'>
            <h1>Contact Us</h1>
            <div className="project-contact-info">
              <ul>
                <li><div><img src={contactimg} alt="Phone icon" /><h3>Let's Talk</h3></div><p id='phoneNumber' onClick={copyToClipboard}>+91 8778676679</p></li>
                <li><div><img src={emailimg} alt="Email icon" /><h3>General Support</h3></div><a href="mailto:contact@gmail.com" id="emailLink"><p>contact@gmail.com</p></a></li>
                <li><div><img src={locationimg} alt="Location icon" /><h3>Address</h3></div><p>123 Gourmet Street, Food City, India</p></li>
              </ul>

            </div>

          </div>
          <div className='project-contact-right'>
            <h1>Contact Us</h1>
            <p>We would love to hear from you! Please fill out the form below to get in touch.</p>

            <form onSubmit={handleSubmit}>
              <div className="project-form-group">
                <div><label htmlFor="name">Name:</label>{errors.name && <span className="error">{errors.name}</span>}</div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <div className="project-form-group">
                <div><label htmlFor="email">Email:</label>{errors.email && <span className="error">{errors.email}</span>}                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='ex: contact@gmail.com'
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="project-form-group">
                <div className='messagediv'><label htmlFor="message">Message:{errors.message && <span className="error">{errors.message}</span>}</label><span className='zoom' onClick={() => setIsModalOpen(true)}><img src={zoomimg} alt='' /></span></div>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Describe here...'
                  rows="8"
                  value={formData.message}
                  onChange={handleChange}
                />

              </div>
              <div className='project-submitdiv'>
                <button type="submit" className='project-submitbtn' disabled={loading}>{loading ? "Sending..." : <><img src={sendimg} alt="" className="sendicon" />Send Message</>}</button>
              </div>
            </form>


          </div>
        </div>
        <ToastContainer />
      </div>
      {isModalOpen && (<div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
          <button className="close-button" onClick={() => setIsModalOpen(false)}>
            &times;
          </button>
          <div><label htmlFor="message">Message:</label></div>
          <textarea
            id="message"
            name="message"
            placeholder='Describe here...'
            rows="25"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>)}
    </>
  );
};

export default ContactUs;
