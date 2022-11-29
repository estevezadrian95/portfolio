import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! Soy <span className="purple">Adrian Estevez </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
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
          </p>
          <ul>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
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
