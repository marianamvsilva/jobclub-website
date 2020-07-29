import React from "react";
import Card from "react-bootstrap/Card";
import "./benefits.css";
import image_womanwriting from "./images/image_womanwriting.png";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faCoffee} className="fontawesome" />
                  Conhecer e interagir com novas empresas.
                </li>
                <li>Receber feedback qualificado de recrutadores.</li>
                <li>Perceber como abordar as empresas.</li>
                <li>Identificar erros frequentes.</li>
                <li>Superar a insegurança na procura de emprego.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
