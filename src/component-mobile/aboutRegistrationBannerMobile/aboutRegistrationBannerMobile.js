import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './aboutRegistrationBannerMobile.css'
import logo from '../../assets/mainlogo.png'
import appstore from "../../assets/download-appstore.svg";
import playstore from "../../assets/download-playstore.png";

const AboutRegistrationBannerMobile = () => {
  return (
      <Container fluid className="about-container-mobile">
        <Row>
          <Col>
            <img className="logo-mobile" src={logo} alt="Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about-subheader-mobile">Our mission is to give people the inspiration and tools to complete personal challenges, no matter how big or small.</p>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col>
                        <a href="www.challengeacceptedapp.com" id="appstore" onclick=""><img className="download-button1" src={appstore} alt="Download PLay Store" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.challengeaccepted.challengeacceptedapp&hl=en_GB" id="playstore" onclick=""><img className="download-button2" src={playstore} alt="Downlod App Store" /></a>
          </Col>
        </Row>
      </Container>
  )
};

export default AboutRegistrationBannerMobile;
