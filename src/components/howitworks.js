import React from "react";
import "./howitworks.css";
import image_womanpc from "./images/image_womanpc.png";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

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
            <div className="display-cards">
              <div className="card-yellow">
                <Card>
                  <div className="row">
                    <div className="col-lg-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="fontawesome-icon-orange"
                      />{" "}
                    </div>
                    <div className="col-lg-10">
                      <h3>Empresas</h3>

                      <p>
                        Para além de dicas por parte de empresários irás ganhar
                        mais experiência e aprender as tendências do mercado.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="card-blue">
                <Card>
                  <div className="row">
                    <div className="col-lg-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="fontawesome-icon"
                      />{" "}
                    </div>
                    <div className="col-lg-10">
                      <h3>Facilitadores</h3>
                      <p>
                        Dedicados a ajudar-te a navegar ao longo do processo de
                        recrutamento.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="card-green">
                <Card>
                  <div className="row">
                    <div className="col-lg-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="fontawesome-icon"
                      />{" "}
                    </div>
                    <div className="col-lg-10">
                      <h3>Tu</h3>
                      <p>Dedicação e uma pequena pitada de esperança!</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <img src={image_womanpc} className="how-img" alt="woman-desk-pc" />
          </div>
        </div>
      </div>
    </div>
  );
}
