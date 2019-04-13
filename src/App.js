import React, { useState } from "react";
import ReactDOM from "react-dom";
import MasterForm from "./MasterForm";
// import Store from "./Store";
import ProviderProps from "./Data/providerProps";

import "./styles.css";
export const ProviderPropsContext = React.createContext({ ...ProviderProps });

function App() {
  const [providerProps, setProviderProps] = useState({ ...ProviderProps });
  return (
    <ProviderPropsContext.Provider value={[providerProps, setProviderProps]}>
      <div className="App">
        <h3>Security Matrix</h3>
        <MasterForm />
      </div>
    </ProviderPropsContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
