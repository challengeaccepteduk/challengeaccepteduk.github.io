import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './aboutRegistrationBanner.css'
import appstore from "../../assets/download-appstore.svg";
import playstore from "../../assets/download-playstore.png";

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

export default AboutRegistrationBanner;
