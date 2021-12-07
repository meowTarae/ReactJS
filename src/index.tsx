import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const darkTheme = {
  textColor: "whiteSmoke",
  backgroundColor: "#262626",
};

const lightTheme = {
  textColor: "#262626",
  backgroundColor: "whiteSmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
