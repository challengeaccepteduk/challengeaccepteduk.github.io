import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeEmail.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {notification} from 'antd';

const HomeEmail = () => {
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
      fetch('https://p6aap78qf4.execute-api.eu-west-1.amazonaws.com/preprod/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          type: 'EMAIL'
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
      <Container fluid className="email-container">
        <Row>
          <Col md={12}>
            <p className="launch-coming">Launch coming June 2020.<br/>Get first
              look access.</p>
          </Col>
          <Col md={12}>
            <p className="well-contact">We will contact you with exclusive
              access to our beta test and product launch.</p>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col md={8}>
            <Form name="register" noValidate validated={validated}
                  onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md={10} controlId="formBasicEmail">
                  <Form.Control type="email" ref={emailRef}
                                placeholder="Enter email"/>
                </Form.Group>
                <Form.Group as={Col} md={2} controlId="formBasicEmail">
                  <Button type="submit" style={{
                    color: "#2A3746",
                    backgroundColor: "#ffce2c",
                    borderColor: "#2E4C80",
                    marginLeft: "-92px"
                  }}>
                    Submit
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
  )
};

export default HomeEmail;
