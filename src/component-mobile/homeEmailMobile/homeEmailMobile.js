import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeEmailMobile.css'
import appstore from "../../assets/download-appstore.svg";
import playstore from "../../assets/download-playstore.png";
const HomeEmailMobile = () => {

  return (
      <Container fluid className="email-container-mobile">
        <Row>
            <Col md={12}>
               <p className="launch-coming">Now available to download</p>
             </Col>
             <Col md={12}>
                    <p className="ctaheading">Download for free on the Apple App Store or Google Play Store</p>
             </Col>
         </Row>
         <Row>
             <Col md={12}>
                      <a href="https://apps.apple.com/us/app/id1517580212" id="appstore" onclick=""><img className="download-button1" src={appstore} alt="Download PLay Store" /></a>
                      <a href="https://play.google.com/store/apps/details?id=com.challengeaccepted.challengeacceptedapp&hl=en_GB" id="playstore" onclick=""><img className="download-button2" src={playstore} alt="Download App Store" /></a>
             </Col>
        </Row>
      </Container>
  )
};

export default HomeEmailMobile;
