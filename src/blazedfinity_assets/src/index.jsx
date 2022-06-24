import * as React from "react";
import { render } from "react-dom";
import { blazedfinity } from "../../declarations/blazedfinity";
import AuthCluster from './auth-cluster';
import ReactDOM from "react-dom/client";

const Kelsa = () => {

  return (
      <div className="App">
         <AuthCluster/>
      </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <Kelsa />
);
