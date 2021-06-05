import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const aboutUs = () => {
  const TextDiv = styled.div`
    margin-top: 100px;
    @media screen and (max-width: 500px) {
      margin-top: 50px;
    }
  `;
  return (
    <Container id="about-us" className="mb-5 txtali-l">
      <Row>
        <Col md={{ span: 6 }}>
          <img
            className="d-block w-100"
            src="./aboutus.jpg"
            alt="First slide"
            fluid="true"
            height="350px"
          />
        </Col>
        <Col md={{ span: 6 }}>
          <TextDiv>
            <h5 className="title" style={{ color: "black", fontSize: 30 }}>
              About us
            </h5>
            <p className="text">
              Unas maravillosas vacaciones de ensueño. La playa con la brisa,
              disfrutando del atardecer en verano, y bañando la estrella a
              medianoche. Qué cosa tan asombrosa cuando te despiertas por la
              mañana con la vista formada por el cielo, las montañas y el océano
              frente a ti. Puede relajarse por completo con la habitación
              luminosa y ordenada, la asombrosa escena y nuestro dulce servicio.
              Lejos de la ciudad noísta ahora mismo.
            </p>
          </TextDiv>
        </Col>
      </Row>
    </Container>
  );
};

export default aboutUs;
