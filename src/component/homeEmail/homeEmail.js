import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeEmail.css'
import appstore from "../../assets/download-appstore.svg";
import playstore from "../../assets/download-playstore.png";

const HomeEmail = () => {

  return (
      <Container fluid className="email-container">
        <Row>
          <Col md={12}>
            <p className="launch-coming">Launch coming soon</p>
          </Col>
          <Col md={12}>
            <p className="ctaheading">Download from Friday 17 July</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
              <a href="www.challengeacceptedapp.com" id="appstore" onclick=""><img className="download-button1" src={appstore} alt="Download PLay Store" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.challengeaccepted.challengeacceptedapp&hl=en_GB" id="playstore" onclick=""><img className="download-button2" src={playstore} alt="Download App Store" /></a>
          </Col>
        </Row>
      </Container>
  )
};

export default HomeEmail;
