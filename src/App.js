import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Benefits from "./components/benefits";
import Intro from "./components/intro";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Header />
      <Benefits />
      <Intro />
    </div>
  );
}

export default App;
