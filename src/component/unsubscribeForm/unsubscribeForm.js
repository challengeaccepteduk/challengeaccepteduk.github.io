import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import './unsubscribeForm.css'
import Button from "react-bootstrap/Button";
import {notification} from "antd";

const UnsubscribeForm = () => {
  const [validated, setValidated] = useState(false);
  let emailRef = React.createRef();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      fetch('https://p6aap78qf4.execute-api.eu-west-1.amazonaws.com/prod/marketing/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailRef.current.value,
        })
      }).then(res =>
          res.json().then(response => {
                notification.open({
                  type: 'success',
                  message: 'Success',
                  description: 'Thanks, you are now unsubscribed!',
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
      <Container fluid className="unsub-features-container">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form name="contact" noValidate validated={validated}
                  onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md={8}  controlId="formGridEmail">
                  <Form.Control type="email" ref={emailRef} placeholder="Enter your email" />
                </Form.Group>
                <Form.Group as={Col} md={2} controlId="formBasicMessage">
                  <Button variant="primary" type="submit">
                    Unsubscribe
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

export default UnsubscribeForm;
