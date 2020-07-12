import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './aboutRegistrationBannerMobile.css'
import logo from '../../assets/mainlogo.png'
import {Link} from 'react-scroll'

const AboutRegistrationBannerMobile = () => {
  return (
      <Container fluid className="about-container-mobile">
        <Row>
          <Col>
            <img className="logo-mobile" src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about-subheader-mobile">Our mission is to give people the inspiration and tools to complete personal challenges, no matter how big or small.</p>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col>
            <Link to="register" spy={true} smooth={true} duration={500} ><button className="register-button-mobile">Pre-register</button></Link>
          </Col>
        </Row>
      </Container>
  )
};

export default AboutRegistrationBannerMobile;
