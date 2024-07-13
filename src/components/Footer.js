import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => (
  <footer className="bg-dark text-white p-4">
    <Container>
      <Row>
        <Col md={6}>
          <h5>Contact Us</h5>
          <p>Email: contact@brainsmediasolutions.com</p>
        </Col>
        <Col md={6} className="text-md-right">
          <h5>Follow Us</h5>
          <div className="compo">
            <a href="https://www.facebook.com" className="text-white mr-3">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="compo">
          <a href="https://www.twitter.com" className="text-white mr-3">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          </div>
          
          <div className="compo"><a href="https://www.linkedin.com" className="text-white">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a></div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
