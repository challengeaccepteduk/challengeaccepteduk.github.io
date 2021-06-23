import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import './homeEmailMobile.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {notification} from 'antd';
import {API_BASE} from "../../../../constants/social";

const HomeEmailMobile = () => {
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
      fetch(API_BASE + '/interest', {
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
      <Container fluid className="email-container-mobile">
        <Row>
          <Col md={12}>
            <p className="launch-coming-mobile">Launch coming June 2020.<br/>Get first
              look access.</p>
          </Col>
          <Col md={12}>
            <p className="well-contact-mobile">We'll contact you with exclusive
              access to our beta test and product launch.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form name="register" noValidate validated={validated}
                  onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md={6} controlId="formBasicEmail">
                  <Form.Control type="email" ref={emailRef}
                                placeholder="Enter email"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <Button type="submit" style={{
                    color: "#2A3746",
                    backgroundColor: "#ffce2c",
                    borderColor: "#2E4C80",
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

export default HomeEmailMobile;
