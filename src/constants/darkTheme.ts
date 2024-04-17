// src/theme/theme.js
import { createTheme } from "@mui/material/styles";
import { DARK_COLORS } from "./colors";

export const darkTheme = createTheme({
  direction: "rtl", // Maintain RTL direction as per your original theme

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
    mode: "dark", // Essential for dark mode
    primary: {
      main: DARK_COLORS.primary,
      light: DARK_COLORS.primaryLight,
    },
    action: {
      active: DARK_COLORS.actionPrimary,
    },
    secondary: {
      main: DARK_COLORS.secondary,
    },
    background: {
      default: DARK_COLORS.backgroundDefault,
      paper: DARK_COLORS.backgroundPaper,
    },
    text: {
      primary: DARK_COLORS.textPrimary,
      secondary: DARK_COLORS.textSecondary,
    },
    error: {
      main: DARK_COLORS.error,
    },
    warning: {
      main: DARK_COLORS.warning,
    },
    info: {
      main: DARK_COLORS.info,
    },
    success: {
      main: DARK_COLORS.success,
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
