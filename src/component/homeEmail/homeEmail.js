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
        <div>
          <a href="https://www.challengeacceptedapp.com" id="appstore">
            <img
                className="iosbutton" src={appstore}
                alt="Download PLay Store"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.challengeaccepted.challengeacceptedapp&hl=en_GB"
             id="playstore">
            <img className="androidbutton" src={playstore}
                                 alt="Download App Store"/>
          </a>
        </div>
      </Container>

  )
};

export default HomeEmail;
