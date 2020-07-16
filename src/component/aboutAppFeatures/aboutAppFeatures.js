import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './aboutAppFeatures.css'
import aboutFlow from "../../assets/aboutflow.png";
import Steph from "../../assets/Steph.png";
import Paul from "../../assets/Paul.png";

const AboutAppFeatures = () => {
  return (
      <Container fluid className="about-features-container">
        <Row>
          <Col>
            <p className="about-feature-header">Challenge Accepted is the app to
              help people discover, track and complete their
              personal<br/> challenges. Such as:</p>
          </Col>
        </Row>
        <Row className="feature-divider" />
        <Row>
          <Col md={1}>
          </Col>
          <Col>
            <p className="about-feature-text">
              <b>Fitness<br/> challenges<br/></b>e.g. 30 day <br/>workout</p>
          </Col>
          <Col>
            <p className="about-feature-text">
              <b>Passion<br/> challenges</b><br/>e.g. see every <br/>premiership<br/>football
              team</p>
          </Col>
          <Col>
            <p className="about-feature-text"><b>Travel<br/> challenge</b><br/>e.g.
              visit every <br/>city in Europe</p>
          </Col>
          <Col>
            <p className="about-feature-text"><b>Or create your<br/> own
              challenges <br/></b>e.g. 12 books<br/>I'm going to<br/>read this
              year
            </p>
          </Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col>
            <p className="about-feature-header">For partners, this means a new route to talk to customers knowing that we’re aligning them with users who are passionate about their product or industry. Brands can partner with
             Challenge Accepted to create their own company challenge, sponsor challenges or categories, and promote deals to customers that help with their passions e.g. a cinema offer to help users complete a film challenge.
            .</p>
          </Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row className="feature-divider" />
        <Row>
          <Col>
            <div className="about-header-bold">Business Model</div>
            <img className="about-flow" src={aboutFlow} alt="Logo"/>
          </Col>
        </Row>
        <Row className="feature-divider" />
        <Row className="feature-divider" />
        <Row>
          <Col>
            <div className="about-header-bold">Founders</div>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <img className="about-profile-pic" src={Paul} alt="Profile"/>
          </Col>
          <Col md={4}>
            <img className="about-profile-pic" src={Steph} alt="Profile"/>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <div className="name-text">Paul Johnson</div>
          </Col>
          <Col md={4}>
            <div className="name-text">Steph Mandeville</div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}>
            <div className="profile-text-header"><b>Experience<br/><br/><br/>University<br/><br/><br/>Focus
              <br/><br/><br/>Challenges</b></div>
          </Col>
          <Col md={4}>
            <div className="profile-text">GSK, Fujitsu, TomTom, William Hill,
              Sky
              <br/><br/>Computer Science and Mathematics BSc from Bath
              University, 2:1 Hons <br/><br/>
              Software development and test engineering<br/><br/>Daily
              Squats<br/>Trying every Dairy milk chocolate<br/>Watching
              every Will Smith film
            </div>
          </Col>
          <Col md={5}>
            <div className="profile-text">Intel, EE, BT, TodayTix<br/><br/>Marketing
              Management BA from <br/>DeMontfort University, 1st Class Hons<br/><br/>
              App scope & design, business development & operations, brand & marketing, finance<br/><br/>30 days of Yoga with Adriene on YouTube<br/>Visiting
              every country in Europe
              <br/>Watching every Disney animation film
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col>
            <div className="about-header-bold">Our Story<br/></div>
          </Col>
        </Row>
        <Row>
          <Col md={1}>

          </Col>
          <Col>
            <div className="profile-text"><br/>Challenge Accepted started when Paul & Steph found themselves actively working on loads
            of challenges and tracking them in so many different ways from a scratch map for travel,
             a list on phones for books to read that year, a 30-day squat challenge app, an app to track
             football stadiums visited, stars on Google maps for restaurants to visit, together
              attempting to climb all 7 mountains around Bergen, and more. Like many people, had a
               million and one personal challenges they were trying to complete but had no one place to keep track
               of them all, so were unlikely to finish them or even forget some.
            </div>
          </Col>
        </Row>
        <Row>


          <Col md={1}>
          </Col>
          <Col>
            <div className="profile-text"><br/>
        Our new challenge became creating an app to help us track and
                      therefore ultimately complete our many challenges.
<br/><br/>
                      Steph, given her background
                      in brand and marketing across large tech companies and a start up app,
        took on the role of scoping the app design, defining the brand and business plan. Along the way having
         to pick up some new skills from finance and legal to brushing up photoshop skills. Paul, who has a
         background of programming at large tech, gaming, fitness and telco companies, developed the website,
          app and CMS from scratch and managed all the product testing. This required learning additional programming
           languages and new programming skills along the way.<br/><br/>

           After months of testing the app, Challenge Accetped is available for launch Friday 17 July.
          </div>
        </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}>

          </Col>

          <Col md={1}></Col>
        </Row>

      </Container>
  )
};

export default AboutAppFeatures;
