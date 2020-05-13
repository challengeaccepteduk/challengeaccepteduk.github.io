import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './footer-mobile.css'
const FooterMobile = () => {
  return (
      <Container fluid className="footer-container">
        <Row>
          <Col md={1}></Col>
          <Col>
            <div className="active-footer-mobile">Company</div>
            <div className="inactive-footer-mobile">About us<br/>Contact us</div>
          </Col>
          <Col>
            <div className="active-footer-mobile">Legal</div>
            <div className="inactive-footer-mobile">Privacy</div>
          </Col>
          <Col>
            <div className="active-footer-mobile">Follow</div>
            <div className="inactive-footer-mobile">Facebook<br/>Twitter<br/></div>
          </Col>
          <Col>
            <div className="active-footer-mobile">App</div>
            <div className="inactive-footer-mobile">Pre-register</div>
          </Col>
        </Row>
      </Container>
  )
};

export default FooterMobile;
