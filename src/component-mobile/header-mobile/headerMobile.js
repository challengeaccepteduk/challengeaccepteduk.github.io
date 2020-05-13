import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './headerMobile.css'
import {ABOUT, CONTACT, HOME, PARTNER} from "../../constants/constants";
import {Link} from "react-router-dom";
const HeaderMobile = (props) => {
  return (
      <Container fluid className="header-container-mobile">
        <Row>
          <Col>
            <Link className={props.tab === HOME ? 'active-tab-mobile' : 'inactive-tab-mobile'} to="/">Home</Link>
          </Col>
          <Col>
            <Link className={props.tab === ABOUT ? 'active-tab-mobile' : 'inactive-tab-mobile'} to="/about">About</Link>
          </Col>
          <Col>
            <Link className={props.tab === PARTNER ? 'active-tab-mobile' : 'inactive-tab-mobile'} to="/partner">Partner</Link>
          </Col>
          <Col>
            <Link className={props.tab === CONTACT ? 'active-tab-mobile' : 'inactive-tab-mobile'} to="/contact">Contact</Link>
          </Col>
        </Row>
      </Container>
  )
};

export default HeaderMobile;
