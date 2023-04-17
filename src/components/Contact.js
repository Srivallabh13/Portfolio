import React from 'react'
import '../styles/contact.css'
import working from '../imgs/con.png'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function Contact() {  
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    e.target.reset();
  };

  return (
    <>
      <section className='contact'>
        <div className="container">
          <h1 className="heading"><i className="fas fa-headset"></i>Contact <span>Me</span></h1>
          <div className="content">
              <div className="person">
                  <img src={working} width="350" height="350" alt="cabinet"/>
              </div>
              <form onSubmit={handleSubmit}>
                  <div className="infom">
                      <div className="field"><input className="full_name" type="text" required placeholder="Name"/><i className="fas fa-user"></i></div>
                      <div className="field"><input className="mail" type="email" placeholder="Email"/><i className="fas fa-envelope"></i></div>
                      <div className="field"><input className="phone_no" type="number" name="phone" id="phone" required placeholder="Phone"/><i className="fas fa-phone-alt"></i></div>
                      <div className="field"><input className="query" type="text" name="sub" id="subject" required placeholder="Enter Query"/><i className="fas fa-clipboard"></i></div>
                      <div className="message">
                          <textarea name="message" id="message" cols="50" rows="5" required placeholder="Enter Message"></textarea>
                          <i className="fas fa-comment-dots"></i>
                      </div>
                  </div>
                  <div className="button-div">
                      <button type="submit" className="button-box">
                          Submit<i className="fa fa-paper-plane"></i>
                      </button>
                  </div>
              </form>
          </div>
        </div>
      </section>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Thank you for contacting me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>I will get back to you as soon as possible.</p>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-primary" onClick={() => setShowModal(false)}>
                Close
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
