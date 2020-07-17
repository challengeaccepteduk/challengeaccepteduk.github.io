import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeRegistrationBanner.css'
import logo from '../../assets/mainlogo.png'
import appstore from "../../assets/download-appstore.svg";
import playstore from "../../assets/download-playstore.png";

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
                <p className="challenge-maintext-desktop">Available Friday 17 July on</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
              </Col>
              <Col>
                <a href="https://apps.apple.com/us/app/id1517580212" id="appstore" onclick=""><img className="download-button1" src={appstore} alt="Download PLay Store" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.challengeaccepted.challengeacceptedapp&hl=en_GB" id="playstore" onclick=""><img className="download-button2" src={playstore} alt="Downlod App Store" /></a>
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
