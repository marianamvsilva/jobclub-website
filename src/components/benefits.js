import React from "react";
import Card from "react-bootstrap/Card";
import "./benefits.css";
import image_womanwriting from "./images/image_womanwriting.png";

export default function Benefits() {
  return (
    <div className="benefits">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            {" "}
            <img
              src={image_womanwriting}
              className="benefits-img"
              alt="woman-writing"
            />
          </div>
          <div className="col-lg-5 col-card">
            {" "}
            <Card>
              <h2>Procuras dar o próximo passo na tua carreira?</h2>{" "}
              <p className="benefits-text">Mas precisas de:</p>
              <ul>
                <li className="icon-orange">
                  <p>Conhecer e interagir com novas empresas.</p>
                </li>
                <li className="icon-blue">
                  <p>Receber feedback qualificado de recrutadores.</p>
                </li>
                <li className="icon-green">
                  <p>Perceber como abordar as empresas.</p>
                </li>
                <li className="icon-salmon">
                  <p>Identificar erros frequentes.</p>
                </li>
                <li className="icon-purple">
                  <p>Superar a insegurança na procura de emprego.</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
