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
            <p className="launch-coming">Try out the app for free today</p>
          </Col>
          <Col md={12}>
            <p className="ctaheading">Available on Apple and Android today</p>
          </Col>
        </Row>
        <div>
          <a href="https://apps.apple.com/us/app/id1517580212" id="appstore">
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
