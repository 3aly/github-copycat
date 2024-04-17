import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  responsiveText: {
    fontSize: "1rem", // Default size

    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem", // Even larger text on md screens and above
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem", // Even larger text on md screens and above
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem", // Larger text on sm screens and above
    },
  },
  allContainer: {
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    background: theme.direction,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginInlineEnd: theme.spacing(3),
  },

  info: {},
  link: {
    textDecoration: "none",
  },
}));
