import { createTheme } from "@mui/material/styles";
import { COLORS, DARK } from "./colors";

export const theme = createTheme({
  direction: "rtl", // Switch between 'rtl' and 'ltr'

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#083678",
      light: "#0073e6",
    },
    secondary: {
      main: "#003366",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#ffffff",
    },
    error: {
      main: "#e57373",
    },
    warning: {
      main: "#ffb74d",
    },
    info: {
      main: "#64b5f6",
    },
    success: {
      main: "#81c784",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "Tajawal, Arial",
    button: {
      textTransform: "none",
    },
  },
});
