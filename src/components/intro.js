import React from "react";
import Card from "react-bootstrap/Card";
import "./intro.css";
import image_grouppeople from "./images/image_grouppeople.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={image_grouppeople}
              className="intro-img"
              alt="group-people"
            />
          </div>
          <div className="col-lg-5">
            <Card style={{ width: "500px" }}>
              <h2>O Job Club</h2>
              <p>
                Oferece um conjunto de sessões online onde pequenos grupos de
                participantes podem discutir estratégias para conseguir emprego
                através do contacto com empresas e recrutadores que ajudarão a
                avaliar as possibilidades de carreira, a entender as
                oportunidades de mercado, as competências mais procuradas.
              </p>
              <p>
                Na sequência destas sessões, os participantes podem ainda
                agendar reuniões individuais de orientação de carreira e de
                feedback à preparação de candidaturas.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
