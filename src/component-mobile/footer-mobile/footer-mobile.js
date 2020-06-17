import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './footer-mobile.css'
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
const FooterMobile = () => {
  return (
      <Container fluid className="footer-container">
        <Row>
          <Col md={1}></Col>
          <Col>
            <div className="active-footer-mobile">Company</div>
            <div className="inactive-footer-mobile"><Link to="/about" className="inactive-footer-mobile">About us</Link><br/><Link to="/contact" className="inactive-footer-mobile">Contact us</Link><br/><Link to="/blog" className="inactive-footer-mobile">Blog</Link></div>
          </Col>
          <Col>
            <div className="active-footer-mobile">Legal</div>
            <div className="inactive-footer-mobile"><Link to="/privacy" className="inactive-footer-mobile">Privacy</Link></div>
            <div className="inactive-footer-mobile"><Link to="/terms" className="inactive-footer-mobile">Terms</Link></div>
            <div className="inactive-footer-mobile"><Link to="/cookies" className="inactive-footer-mobile">Cookies</Link></div>
          </Col>
          <Col>
            <div className="active-footer-mobile">Follow</div>
            <div className="inactive-footer-mobile">
              <a className="inactive-footer-mobile" href="https://www.facebook.com/ChallengeAcceptApp">Facebook</a> <br/>
              <a className="inactive-footer-mobile" href="https://twitter.com/ChallengeA_UK">Twitter</a>
            </div>          </Col>
          <Col>
            <div className="active-footer-mobile">App</div>
            <ScrollLink to="register" spy={true} smooth={true} duration={500} ><div className="inactive-footer-mobile">Pre-register</div></ScrollLink>
          </Col>
        </Row>
      </Container>
  )
};

export default FooterMobile;
