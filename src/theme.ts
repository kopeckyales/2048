import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#192550",
      light: "#ebeff2",
      dark: "#141e40",
    },
    secondary: {
      main: "#ff7558",
      contrastText: "#ffffff",
      dark: "#e85c52",
    },
    background: {
      paper: "#eaeff2",
    },
    text: {
      primary: "#192550",
      secondary: "#4b5168",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
