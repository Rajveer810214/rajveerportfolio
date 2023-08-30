import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };
  
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      try {
        setDone(true)
        await axios.post('https://sidhuportfolio.onrender.com/contact', {
          name: formData.from_name,
          email: formData.reply_to,
          des: formData.message,
        },
        setTimeout(() => {
          setDone(false);
        }, 8000),
        document.getElementById("contactForm").reset())
      
        console.log(done);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  
  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} id='contactForm' onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && 'Please, fill all the input fields'}
            </span>
            <Button
              type="submit"
              className="button"
              disabled={done}
            >
              Send
            </Button>
            {done && (
              <span className="done">
                Thanks for contacting me! Your message has been sent successfully.
                If you have any serious queries, I will reply. Feel free to connect
                with me on LinkedIn as well.
              </span>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
