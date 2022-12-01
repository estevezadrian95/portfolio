import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="h3">
          <p style={{ textAlign: "justify" }}>
            Hola! Soy <span className="purple">Adrian Estevez </span>
            de <span className="purple"> Buenos Aires, Argentina.</span>
            <br />Actualmente me encuentro trabajando como desarrollador .Net y cursando las ultima materias de la carrera de
            <i>
              <b className="purple"> Ingenieria en informatica </b> en la Universidad Nacional de la Matanza
            </i>
            <br />
            <br />
            Mi <i><b className="purple">objetivo</b></i> es formar parte de un equipo de trabajo donde se me permita aplicar mis conocimientos adquiridos en mis años de estudio y
            experiencia profesional, además de tener la posibilidad de seguir creciendo profesionalmente fortaleciéndome con nuevas habilidades
            <br />
          </p>
          <ul>
          </ul>
          <p style={{ color: "rgb(115, 230, 220)" }}>
            "La disciplina le gana al talento"{" "}
          </p>
        </blockquote>
        <br />
        <br />
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
