import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container id="contact-us" className="mb-5 txtali-l">
      <Row>
        <Col md={{ span: 4 }}>
          <img
            alt=""
            src="./leaf.png"
            width="200"
            height="200"
            className="d-inline-block align-top"
          />
        </Col>
        <Col md={8}>
          <h5 className="title">Contact us</h5>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupPassword">
              <Form.Control required type="text" placeholder="Your name" />
              <Form.Control.Feedback type="invalid">
                Por favor, escriba su nombre.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                required
                type="email"
                placeholder="Your email address"
              />
              <Form.Control.Feedback type="invalid">
                Por favor, introduce una dirección de correo electrónico válida.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                required
                type="text"
                placeholder="Your message"
                as="textarea"
                aria-label="With textarea"
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese su mensaje.
              </Form.Control.Feedback>
            </Form.Group>
            <Col md={{ span: 2, offset: 10 }}>
              <Button type="submit" size="sm" className="customBtn">
                Enviar
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
