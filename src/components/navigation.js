import React from "react";
import "./navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo_jobclub from "./images/logo_jobclub.png";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <img src={logo_jobclub} className="logo-main" alt="JobClub"></img>
          </div>
          <div className="col-lg-6 menu-bar">
            <Navbar scrolling dark expand="sm" sticky="bottom">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#sobre">Sobre</Nav.Link>
                  <Nav.Link href="#funciona">Como Funciona</Nav.Link>
                  <Nav.Link href="#equipa">Equipa</Nav.Link>
                  <Nav.Link href="#equipa">Contactos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
