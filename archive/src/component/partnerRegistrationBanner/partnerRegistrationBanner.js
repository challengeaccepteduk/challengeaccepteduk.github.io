import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './partnerRegistrationBanner.css'
import {Link} from 'react-scroll'

const PartnerRegistrationBanner = () => {
  return (
      <Container fluid className="about-register-container">
        <Row>
          <Col>
            <Row>
              <Col>
                <p className="about-subheader">Working with brands to engage customers in a unique <br/>
                  way who we <b>know</b> are passionate about your product <br/>or industry.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="contact" spy={true} smooth={true} duration={500} ><button className="about-register-button">Contact Us</button></Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default PartnerRegistrationBanner;
