import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routers from "@routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProvidersWrapper } from "./ProvidersWrapper";

const queryClient = new QueryClient();

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
