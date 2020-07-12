import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './footer.css'
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
const Footer = () => {
  return (
      <div>
      <Container fluid className="footer-container">
        <Row>
          <Col md={1}></Col>
          <Col>
            <div className="active-footer">Company</div>
            <div className="inactive-footer"><Link to="/about" className="inactive-footer">About us</Link><br/><Link to="/contact" className="inactive-footer">Contact us</Link><br/><Link to="/blog" className="inactive-footer">Blog</Link></div>
          </Col>
          <Col>
            <div className="active-footer">Legal</div>
            <div className="inactive-footer"><Link to="/privacy" className="inactive-footer">Privacy</Link></div>
            <div className="inactive-footer"><Link to="/terms" className="inactive-footer">Terms</Link></div>
            <div className="inactive-footer"><Link to="/cookies" className="inactive-footer">Cookies</Link></div>

          </Col>
          <Col>
            <div className="active-footer">Follow Us</div>
            <div className="inactive-footer">
              <a className="inactive-footer" href="https://www.facebook.com/ChallengeAcceptApp">Facebook</a> <br/>
              <a className="inactive-footer" href="https://twitter.com/ChallengeA_UK">Twitter</a>
            </div>
          </Col>
          <Col>
            <div className="active-footer">App</div>
            <ScrollLink to="register" spy={true} smooth={true} duration={500} ><div className="inactive-footer">Pre-register</div></ScrollLink>
          </Col>
        </Row>
      </Container>
      <div className="company-name">Challenge Accepted Ltd</div>
      </div>
  )
};

export default Footer;
