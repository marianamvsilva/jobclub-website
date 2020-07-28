import React from "react";
import Button from "react-bootstrap/Button";
import "./header.css";
import header_img from "./images/image_header.png";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-intro">
            <h1>No JobClub ajudamos-te a encontrar emprego</h1>
            <p>
              Combinando sessões em grupo com mentoria individualizada terás
              melhores ferramentas para (re)entrar no mercado de trabalho
            </p>
            <Button>Saber mais</Button>
          </div>
          <div className="col-lg-6">
            <img src={header_img} className="header-img" alt="person-walking" />
          </div>
        </div>
      </div>
    </div>
  );
}
