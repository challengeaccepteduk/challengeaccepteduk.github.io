import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './contactBanner.css'
const ContactBanner = () => {
  return (
      <Container fluid className="contact-register-container">
        <Row>
          <Col>
            <Row>
              <Col>
                <p className="contact-subheader">To find out more about opportunities at launch, get in <br/>touch with us below.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default ContactBanner;
