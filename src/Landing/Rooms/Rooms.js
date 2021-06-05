import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FixedSizeGrid as Grid } from "react-window";
import styled from "styled-components";

const Rooms = () => {
  const imgsArray = [
    [
      { src: "./DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room" },
      { src: "./DeluxeSingleRoom.jpg", alt: "Deluxe Single Room" },
      { src: "./DeluxeTwinRoom.jpg", alt: "Deluxe Twin Room" },
    ],
    [
      { src: "./DoubleRoom.jpg", alt: "Double Room" },
      { src: "./singleRoom.jpeg", alt: "Single Room" },
      { src: "./TwinRoom.jpg", alt: "Twin Room" },
    ],
    [
      { src: "./DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room" },
      { src: "./DeluxeSingleRoom.jpg", alt: "Deluxe Single Room" },
      { src: "./DeluxeTwinRoom.jpg", alt: "Deluxe Twin Room" },
    ],
    [
      { src: "./DoubleRoom.jpg", alt: "Double Room" },
      { src: "./singleRoom.jpeg", alt: "Single Room" },
      { src: "./TwinRoom.jpg", alt: "Twin Room" },
    ],
    [
      { src: "./DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room" },
      { src: "./DeluxeSingleRoom.jpg", alt: "Deluxe Single Room" },
      { src: "./DeluxeTwinRoom.jpg", alt: "Deluxe Twin Room" },
    ],
    [
      { src: "./DoubleRoom.jpg", alt: "Double Room" },
      { src: "./singleRoom.jpeg", alt: "Single Room" },
      { src: "./TwinRoom.jpg", alt: "Twin Room" },
    ],
  ];
  const JumbotronDiv = styled(Jumbotron)`
		backgroundColor: "#E6E4DC",
		height: "400px"
	`;
  const TextDiv = styled.div`
    margin-top: 100px;
  `;
  const GridDiv = styled(Grid)`
    @media screen and (max-width: 800px) {
      width: 450px;
      height: 300px;
    }
  `;
  const CaptionDiv = styled.div`
    position: absolute;
    right: 15%;
    top: 45%;
    left: 15%;
    z-zndex: 10;
    color: #fff;
    text-align: center;
  `;
  const ImgGridDiv = styled.div`
    @media screen and (max-width: 800px) {
      width: 150px !important;
      height: 150px !important;
    }
  `;
  const ImgStyle = styled.img`
    width: 200px;
    height: 200px;
    @media screen and (max-width: 800px) {
      width: 150px;
      height: 150px;
    }
  `;
  const Cell = ({ columnIndex, rowIndex, style }) => (
    <ImgGridDiv style={style}>
      <ImgStyle
        src={imgsArray[rowIndex][columnIndex].src}
        alt={imgsArray[rowIndex][columnIndex].alt}
      />
      <CaptionDiv>
        <p>{imgsArray[rowIndex][columnIndex].alt}</p>
      </CaptionDiv>
    </ImgGridDiv>
  );
  return (
    <JumbotronDiv id="rooms" className="pt-0 pb-0" fluid>
      <Container className="txtali-l">
        <Row>
          <Col md={{ span: 3, offset: 1 }}>
            <TextDiv>
              <h5 className="title" style={{ color: "black", fontSize: 30 }}>
                Rooms
              </h5>
              <p className="text">
                Umbrella Glamping cuneta con 67 suites. Cada uno ingeniosamente
                combina lo último en lujo, comodidad y sofisticación. Cada
                espacio vital, da un nuevo definición de opulencia y esplendor,
                que acabados contemporáneos e instalaciones premium.
              </p>
            </TextDiv>
          </Col>
          <Col md={7}>
            <GridDiv
              className="Grid"
              columnCount={3}
              columnWidth={200}
              height={400}
              rowCount={6}
              rowHeight={200}
              width={600}
            >
              {Cell}
            </GridDiv>
          </Col>
        </Row>
      </Container>
    </JumbotronDiv>
  );
};

export default Rooms;
