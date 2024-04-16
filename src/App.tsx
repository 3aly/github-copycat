import React from "react";

import "./App.css";
import Routers from "@routes/Routes";
import { ProvidersWrapper } from "./ProvidersWrapper";
import Navbar from "@components/organisms/NavBar/NavBar";

function App() {
  return (
    <ProvidersWrapper>
      <div className="App">
        <Navbar />

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
