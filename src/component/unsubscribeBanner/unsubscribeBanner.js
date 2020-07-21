import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './unsubscribeBanner.css'
const UnsubscribeBanner = () => {
  return (
      <Container fluid className="unsub-register-container">
        <Row>
          <Col>
            <Row>
              <Col>
                <p className="contact-subheader">Enter your email below to unsubscribe.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default UnsubscribeBanner;
