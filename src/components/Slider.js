import React from 'react';
import { Carousel } from 'react-bootstrap';
// import './Slider.css'; // Import custom styles for Slider 

const Slider = () => (
  <div className="slider">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1720863226~exp=1720866826~hmac=f5ebded8126a8a29f9e7fd830c1e48d8e510307090857191e17a358401046eec&w=996"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Discover Our Services</h3>
          <p>Trusted solutions for your business needs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062010.jpg?t=st=1720865538~exp=1720869138~hmac=fade3a3a8fb81bea2ba414ff5f39645209d56a0bb3a5b0c5004bc62bf5057778&w=996"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Boost Your Online Presence</h3>
          <p>Effective strategies for digital success</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?t=st=1720865558~exp=1720869158~hmac=c61ae07769117c004b54a75379c60b4fa5950822a773c04b8412497303a39163&w=996"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Responsive Web Design</h3>
          <p>Optimized for all devices</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Slider;
