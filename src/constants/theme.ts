import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

export const theme = createTheme({
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
      main: COLORS.primary,
      light: COLORS.primaryLight,
    },
    action: {
      active: COLORS.actionPrimary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    background: {
      default: COLORS.backgroundDefault,
      paper: COLORS.backgroundPaper,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
    error: {
      main: COLORS.error,
    },
    warning: {
      main: COLORS.warning,
    },
    info: {
      main: COLORS.info,
    },
    success: {
      main: COLORS.success,
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
