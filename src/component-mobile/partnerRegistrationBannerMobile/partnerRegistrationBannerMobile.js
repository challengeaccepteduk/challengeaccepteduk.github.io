import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './partnerRegistrationBannerMobile.css'
import logo from '../../assets/mainlogo.png'
import {Link} from 'react-scroll'

const PartnerRegistrationBannerMobile = () => {
  return (
      <Container fluid className="home-container">
        <Row>
          <Col>
            <img className="logo-mobile" src={logo} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about-subheader-mobile">Working with brands to engage
              customers in a unique way who we <b>know</b> are passionate about
              your product or industry.</p></Col>
        </Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col>

            <Link to="contact" spy={true} smooth={true} duration={500}>
              <button className="register-button-mobile">Contact Us</button>
            </Link>
          </Col>
        </Row>
      </Container>
  )
};

export default PartnerRegistrationBannerMobile;
