import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import './contactFormMobile.css'
import Button from "react-bootstrap/Button";
import {notification} from "antd";

const ContactFormMobile = () => {
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
      fetch('https://p6aap78qf4.execute-api.eu-west-1.amazonaws.com/preprod/interest', {
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
      <Container fluid className="partner-features-container">
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
        <Row>
          <Col>
            <p>Or email us at hello@challengeacceptedapp.com</p>
          </Col>
        </Row>

      </Container>
  )
};

export default ContactFormMobile;
