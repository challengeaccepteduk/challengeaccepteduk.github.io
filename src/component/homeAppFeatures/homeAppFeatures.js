import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeAppFeatures.css'
import friends from '../../assets/friends.png'
import notification from '../../assets/notification.png'
import pencil from '../../assets/pencil.png'
import search from '../../assets/search.png'
import app1 from "../../assets/home-appscreen-1.png";
import app2 from "../../assets/home-appscreen-2.png";
import app3 from "../../assets/home-appscreen-3.png";
import app4 from "../../assets/home-appscreen-4.png";

const HomeAppFeatures = () => {
  return (
      <Container fluid className="features-container">
        <Row className="feature-row">
          <Col md={1}>
          </Col>
          <Col>
            <img className="feature-logo" src={search} alt="Logo"/>
          </Col>
          <Col>
            <img className="feature-logo" src={notification} alt="Logo"/>
          </Col>
          <Col>
            <img className="feature-logo" src={friends} alt="Logo"/>
          </Col>
          <Col>
            <img className="feature-logo" src={pencil} alt="Logo"/>
          </Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row className="feature-row">
          <Col md={1}>
          </Col>
          <Col>
            <p className="feature-text">Discover<br/> challenges</p>
          </Col>
          <Col>
            <p className="feature-text">Set<br/> reminders</p>
          </Col>
          <Col>
            <p className="feature-text">Challenge<br/> friends</p>
          </Col>
          <Col>
            <p className="feature-text">Create your<br/> own challenges
            </p>
          </Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row className="screen-row">
          <Col>
            <p className="feature-text-large-one">Discover challenges in the things you love from sport,
             travel, health & fitness, food and more.
             Or create your own challenge.</p>
          </Col>
          <Col>
            <Row>
              <Col md={10}>
                <img className="screenshot" src={app1} alt="Logo"/>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="screen-row">
          <Col>
            <Row>
              <Col md={1}>
              </Col>
              <Col md={10}>
                <img className="screenshot" src={app2} alt="Logo"/>
              </Col>
            </Row>
          </Col>
          <Col>
            <p className="feature-text-large-two">Set notification reminders for your challenges based around
             your schedule.</p>
          </Col>

        </Row>
        <Row className="screen-row">
          <Col>
            <p className="feature-text-large-three">Add friends so you can share your progress and see what
            challenges each other are completing. </p>
          </Col>
          <Col>
            <Row>
              <Col md={10}>
                <img className="screenshot" src={app3} alt="Logo"/>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="screen-row">
          <Col>
            <Row>
              <Col md={1}>
              </Col>
              <Col md={10}>
                <img className="screenshot" src={app4} alt="Logo"/>
              </Col>
            </Row>
          </Col>
          <Col>
            <p className="feature-text-large-four">Create your own challenge from scratch based
             on your goals. </p>
          </Col>
        </Row>
      </Container>
  )
};

export default HomeAppFeatures;
