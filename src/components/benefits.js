import React from "react";
import Card from "react-bootstrap/Card";
import "./benefits.css";
import image_womanwriting from "./images/image_womanwriting.png";

export default function Benefits() {
  return (
    <div className="benefits">
      <div className="container">
        <img
          src={image_womanwriting}
          className="benefits-img"
          alt="woman-writing"
        />
        <Card style={{ width: "500px" }}>
          <Card.Body>
            <h2>Procuras dar o próximo passo na tua carreira?</h2>{" "}
            <Card.Text>
              <p className="benefits-text">Mas precisas de:</p>
              <ul>
                <li className="icon-orange">
                  Conhecer e interagir com novas empresas.
                </li>
                <li className="icon-blue">
                  Receber feedback qualificado de recrutadores.
                </li>
                <li className="icon-green">
                  Perceber como abordar as empresas.
                </li>
                <li className="icon-salmon">Identificar erros frequentes.</li>
                <li className="icon-purple">
                  Superar a insegurança na procura de emprego.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
