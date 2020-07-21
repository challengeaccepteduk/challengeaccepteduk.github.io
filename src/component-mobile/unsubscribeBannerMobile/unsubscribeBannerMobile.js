import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './unsubscribeBannerMobile.css'
const UnsubscribeBannerMobile = () => {
  return (
      <Container fluid className="contact-register-container-mobile">
        <Row>
          <Col>
            <Row>
              <Col>
                <p className="contact-subheader-mobile">Enter your email below to unsubscribe.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default UnsubscribeBannerMobile;
