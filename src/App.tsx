import React from "react";

import "./App.css";
import Routers from "@routes/Routes";
import { ProvidersWrapper } from "./ProvidersWrapper";
import Navbar from "@components/organisms/NavBar/NavBar";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { StoreType } from "@datatypes/types";
import { theme } from "@constants/theme";
import { darkTheme } from "@constants/darkTheme";
import { Footer } from "./components";

function App() {
  const { darkMode } = useSelector((state: StoreType) => state.theme);

  return (
    <ProvidersWrapper>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <div className="App">
          <Routers />
        </div>
        <Footer />
      </ThemeProvider>
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
