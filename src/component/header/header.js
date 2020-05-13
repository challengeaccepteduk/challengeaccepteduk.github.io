import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './header.css'
import {ABOUT, CONTACT, HOME, PARTNER} from "../../constants/constants";
import {Link} from "react-router-dom";
const Header = (props) => {
  return (
      <Container fluid className="header-container">
        <Row>
          <Col>
            <Link className={props.tab === HOME ? 'active-tab' : 'inactive-tab'} to="/">Home</Link>
          </Col>
          <Col>
            <Link className={props.tab === ABOUT ? 'active-tab' : 'inactive-tab'} to="/about">About</Link>
          </Col>
          <Col>
            <Link className={props.tab === PARTNER ? 'active-tab' : 'inactive-tab'} to="/partner">Partner</Link>
          </Col>
          <Col>
            <Link className={props.tab === CONTACT ? 'active-tab' : 'inactive-tab'} to="/contact">Contact</Link>
          </Col>
        </Row>
      </Container>
  )
};

export default Header;
