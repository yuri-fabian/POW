import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import AboutUs from "./AboutUs/AboutUs";
import Rooms from "./Rooms/Rooms";
import ContactUs from "./ContactUs/ContactUs";

const App = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {/* <Navbar /> */}
        <Carousel />
        <AboutUs />
        <Rooms />
        <ContactUs />
      </Row>
    </Container>
  );
};

export default App;
