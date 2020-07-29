import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Benefits from "./components/benefits";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Benefits />
      </header>
    </div>
  );
}

export default App;
