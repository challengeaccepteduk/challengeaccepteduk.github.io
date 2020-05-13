import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './aboutRegistrationBanner.css'
import {Link} from 'react-scroll'

const AboutRegistrationBanner = (props) => {
  return (
      <Container fluid className="about-register-container">
        <Row>
          <Col>
            <Row>
              <Col>
                <p className="about-subheader">Our mission is to give people the inspiration and tools <br /> to complete personal challenges, no matter how big or<br /> small.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="register" spy={true} smooth={true} duration={500} ><button className="about-register-button">Pre-register</button></Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default AboutRegistrationBanner;
