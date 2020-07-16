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
            <Row>
              <Col>
                <p className="about-subheader">Working with brands to engage customers in a unique <br/>
                  way who we know are passionate about your product <br/>or industry.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="www.challengeacceptedapp.com" id="appstore" onclick=""><img className="download-button1" src={appstore} alt="Download PLay Store" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.challengeaccepted.challengeacceptedapp&hl=en_GB" id="playstore" onclick=""><img className="download-button2" src={playstore} alt="Downlod App Store" /></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
};

export default PartnerRegistrationBanner;
