import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MasterForm from "./MasterForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MasterForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
