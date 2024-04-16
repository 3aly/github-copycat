import React from "react";

import "./App.css";
import Routers from "@routes/Routes";
import { ProvidersWrapper } from "./ProvidersWrapper";

function App() {
  return (
    <ProvidersWrapper>
      <div className="App">
        <Routers />
      </div>
    </ProvidersWrapper>
  );
}

const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};

export default AppWithProvider;
