import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Un poco sobre mi<span className="purple"> </span>
            </h1>
            <p className="home-about-body">
              <br />Soy estudiante proximo a graduarme en
              <i> 
                <b className="purple"> Ingenieria en informatica </b> en la UNLaM
              </i>
              <br />
              <br />
              Siempre estoy dispuesto a seguir aprendiendo y perfeccionando mis habilidades en el rubro &nbsp;
              <i>
                <b className="purple">Informatico</b>, ya sea desde nivel{" "}
                <b className="purple"> software </b> como <b className="purple"> hardware </b> 
              </i>
              <br />
              <br />
              Actualmente me encuentro trabajando como <b className="purple">Desarrollador Back-End en NET</b> e incursionando mis primeros pasos en el desarrollo 
              <i>
                <b className="purple">
                  {" "}
                  Frond-End
                </b>
              </i>
              &nbsp; con 
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/estevezadrian95"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/estevezadrian95/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/estevezadrian95"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
