import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import './partnerAppFeaturesMobile.css'
import Button from "react-bootstrap/Button";
import {notification} from "antd";

const PartnerAppFeaturesMobile = () => {
  const [validated, setValidated] = useState(false);
  let emailRef = React.createRef();
  let nameRef = React.createRef();
  let companyRef = React.createRef();
  let numberRef = React.createRef();
  let messageRef = React.createRef();

  const handleSubmit = event => {
    console.log("here")
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      fetch(
          'https://p6aap78qf4.execute-api.eu-west-1.amazonaws.com/preprod/interest',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: emailRef.current.value,
              type: 'MESSAGE',
              name: nameRef.current.value,
              message: messageRef.current.value,
              company: companyRef.current.value,
              number: numberRef.current.value,
            })
          }).then(res =>
          res.json().then(response => {
                notification.open({
                  type: 'success',
                  message: 'Success',
                  description: 'Thanks for registering your interest!',
                  duration: 5
                });
              }
          ).catch(
              err => notification.open({
                type: 'error',
                message: 'Sorry',
                description: 'Unfortunately there was an error, please try again!',
                duration: 5
              })
          )
      ).catch(
          err => notification.open({
            type: 'error',
            message: 'Sorry',
            description: 'Unfortunately there was an error, please try again!',
            duration: 5
          })
      )

    }
  }
  return (
      <Container fluid className="partner-features-container-mobile">
        <Row>
          <Col>
            <p className="partner-feature-header-mobile">We will work with you to ensure your
            brand is reaching the right audience based on showing an active interest and passion
             for your product or industry and therefore help achieve your brand objective of
             brand awareness, engagement or traffic.</p>
          </Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col>
            <p className="partner-feature-text-mobile">
              <b>Demand Generation</b><br/>Providing offers to our base of
              customers that show an interest in your product</p>
          </Col>
          <Col>
            <p className="partner-feature-text-mobile">
              <b>Brand awareness and credibility</b><br/>Sponsoring challenges
              or categories</p>
          </Col>
          <Col>
            <p className="partner-feature-text-mobile">
              <b>Brand awareness and engagement</b><br/>Working together to
              create a challenge relevant for your brand</p>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
        <Row className="feature-divider"></Row>
        <Row>
          <Col>
            <p className="partner-feature-footer-mobile"><b>To find out more
              about opportunities at launch,<br/>contact us using the form
              below.</b></p>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={6}>
            <Form name="contact" noValidate validated={validated}
                  onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md={6} controlId="formGridEmail">
                  <Form.Control type="email" ref={emailRef}
                                placeholder="Email"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={6} controlId="formGridCompany">
                  <Form.Control ref={companyRef} placeholder="Company"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md={6} controlId="formGridName">
                  <Form.Control ref={nameRef} placeholder="Name"/>
                </Form.Group>
                <Form.Group as={Col} md={6} controlId="formGridNumber">
                  <Form.Control ref={numberRef} placeholder="Phone number"/>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridMessage">
                <Form.Control as="textarea" ref={messageRef} rows="4"
                              placeholder="Message"/>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} md={2} controlId="formBasicMessage">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>

      </Container>
  )
};

export default PartnerAppFeaturesMobile;
