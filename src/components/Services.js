import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Services = () => (
  <section id="services" className="p-5 bg-light">
    <div className="container">
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Service 1</Card.Title>
              <Card.Text>Brief description of service 1.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Service 2</Card.Title>
              <Card.Text>Brief description of service 2.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Service 3</Card.Title>
              <Card.Text>Brief description of service 3.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
