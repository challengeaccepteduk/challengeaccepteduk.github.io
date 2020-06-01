import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeAppFeaturesMobile.css'
import friends from '../../assets/friends.png'
import notification from '../../assets/notification.png'
import pencil from '../../assets/pencil.png'
import search from '../../assets/search.png'
import app1 from "../../assets/home-appscreen-1.png";
import app2 from "../../assets/home-appscreen-2.png";
import app3 from "../../assets/home-appscreen-3.png";
import app4 from "../../assets/home-appscreen-4.png";

const HomeAppFeaturesMobile = () => {
  return (
      <Container fluid className="features-container-mobile">
        <Row className="feature-logo-row-mobile">
          <Col xs={1}></Col>
          <Col>
              <img className="feature-logo-mobile" src={search} alt="Logo"/>
              <div className="feature-logo-text-mobile">Discover<br/>challenges</div>
          </Col>
          <Col>
            <img className="feature-logo-mobile" src={notification} alt="Logo"/>
            <div className="feature-logo-text-mobile">Set<br/> reminders</div>
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="feature-logo-row-mobile">
          <Col xs={1}></Col>
          <Col>
            <img className="feature-logo-mobile" src={friends} alt="Logo"/>
            <div className="feature-logo-text-mobile">Challenge<br/>friends</div>
          </Col>
          <Col>
            <img className="feature-logo-mobile" src={pencil} alt="Logo"/>
            <div className="feature-logo-text-mobile">Create your<br/>own challenges</div>
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="divider-mobile"></Row>
        <Row>
          <Col>
            <p className="feature-text-mobile">Discover challenges in the things you love from sport, travel,
            health & fitness, food and more. Or create your own challenge.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="screenshot-mobile" src={app1} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="feature-text-mobile">Set notification reminders for your challenges based around your schedule.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="screenshot-mobile" src={app2} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="feature-text-mobile">Add friends so you can share your progress and see what challenges
            each other are completing. </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="screenshot-mobile" src={app3} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="feature-text-mobile">Create your own challenge from scratch based on your goals. </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="screenshot-mobile" src={app4} alt="Logo"/>
          </Col>
        </Row>
      </Container>
  )
};

export default HomeAppFeaturesMobile;
