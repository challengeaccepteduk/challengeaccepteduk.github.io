import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeRegistrationBannerMobile.css'
import logo from '../../assets/mainlogo.png'
import {Link} from 'react-scroll'

const HomeRegistrationBannerMobile = () => {
  return (
      <Container fluid className="home-container">
        <Row>
          <Col>
            <img className="logo-mobile" src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="challenge-header-mobile">Challenge Accepted</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="challenge-subheader-mobile">Discover, track and complete<br /> your challenges all in one place.</p>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col>

            <Link to="register" spy={true} smooth={true} duration={500} ><button className="register-button-mobile">Register for Beta</button></Link>
          </Col>
        </Row>
      </Container>
  )
};

export default HomeRegistrationBannerMobile;
