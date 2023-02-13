import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <App />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
