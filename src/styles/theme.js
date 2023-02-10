import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  /*  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    html: {
      width: "100%",
      height: "100%",
      "-ms-text-size-adjust": "100%",
      "-webkit-overflow-scrolling": "touch",
    },
    body: {
      width: "100%",
      height: "100%",
    },
    "#root": {
      width: "100%",
      height: "100%",
    },
  }, */
  palette: {
    primary: {
      main: "#0E71B3",
    },
    secondary: {
      main: "#3699FF",
    },
    error: {
      main: "#F23F44",
    },
    success: {
      main: "#35C979",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
