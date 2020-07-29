import React from "react";
import "./howitworks.css";
import image_womanpc from "./images/image_womanpc.png";

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2>Como funciona?</h2>
            <p>
              O Job Club é um formato que permite às pessoas que pretendem
              (re)entrar no mercado de trabalho participar em formatos de
              pequeno grupo e em reuniões individuais com profissionais ligados
              ao recrutamento.
            </p>{" "}
          </div>
          <div className="col-lg-5">
            <img src={image_womanpc} className="how-img" alt="woman-desk-pc" />
          </div>
        </div>
      </div>
    </div>
  );
}
