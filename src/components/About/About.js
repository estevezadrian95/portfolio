import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{ justifyContent: "center", paddingTop: "0px", paddingBottom: "50px", }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Un poco sobre mi
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="cian">Lenguajes</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="cian">Herramientas</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
