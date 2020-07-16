import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './partnerRegistrationBanner.css'
import appstore from "../../assets/download-appstore.svg";
import playstore from "../../assets/download-playstore.png";

const PartnerRegistrationBanner = () => {
  return (
      <Container fluid className="about-register-container">
        <Row>
          <Col>
            <p className="about-subheader">Working with brands to engage
              customers in a unique <br/>
              way who we know are passionate about your product <br/>or
              industry.</p>
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

export default PartnerRegistrationBanner;
