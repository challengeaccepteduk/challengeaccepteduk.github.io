import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './contactBannerMobile.css'
import logo from "../../assets/mainlogo.png";
const ContactBannerMobile = () => {
  return (
      <Container fluid className="contact-register-container-mobile">
        <Row>
          <Col>
            <img className="logo-mobile" src={logo} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <p className="contact-subheader-mobile">To find out more about opportunities at launch, get in touch with us below.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default ContactBannerMobile;
