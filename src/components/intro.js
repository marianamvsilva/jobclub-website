import React from "react";
import Card from "react-bootstrap/Card";
import "./intro.css";
import image_womanwriting from "./images/image_womanwriting.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <img
          src={image_womanwriting}
          className="benefits-img"
          alt="woman-writing"
        />
        <Card style={{ width: "500px" }}>
          <Card.Body>
            <h2>O Job Club</h2>
            <p>
              Oferece um conjunto de sessões online onde pequenos grupos de
              participantes podem discutir estratégias para conseguir emprego
              através do contacto com empresas e recrutadores que ajudarão a
              avaliar as possibilidades de carreira, a entender as oportunidades
              de mercado, as competências mais procuradas.
            </p>
            <p>
              Na sequência destas sessões, os participantes podem ainda agendar
              reuniões individuais de orientação de carreira e de feedback à
              preparação de candidaturas.
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
