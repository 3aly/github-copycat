import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  responsiveText: {
    fontSize: "1rem",

    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  allContainer: {
    background: theme.palette.background.default,
    ...layouts.col,
    ...layouts.yCentered,
  },
  container: {
    ...layouts.row,
    ...layouts.yCentered,
  },
}));
