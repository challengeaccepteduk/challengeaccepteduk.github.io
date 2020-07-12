import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeRegistrationBanner.css'
import logo from '../../assets/mainlogo.png'
import {Link} from 'react-scroll'

const HomeRegistrationBanner = (props) => {
  return (
      <Container fluid className="home-container">
        <Row>
          <Col>
            <Row>
              <Col md={2}>
              </Col>
              <Col>
                <p className="challenge-header">Challenge Accepted</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
              </Col>
              <Col>
                <p className="challenge-subheader">Discover, track and complete<br /> your challenges all in one place.</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
              </Col>
              <Col>

                <Link to="register" spy={true} smooth={true} duration={500} ><button className="register-button">Register for Beta</button></Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={10}>
                <img className="logo" src={logo} alt="Logo" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default HomeRegistrationBanner;
