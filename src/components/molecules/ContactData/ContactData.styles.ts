import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  responsiveText: {
    fontSize: "1rem", // Default size
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem", // Larger text on sm screens and above
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem", // Even larger text on md screens and above
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem", // Even larger text on md screens and above
    },
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),

    [theme.breakpoints.down("xl")]: {
      bottom: theme.spacing(9),
      height: theme.spacing(30),
      width: theme.spacing(30),
    },
    [theme.breakpoints.down("lg")]: {
      bottom: theme.spacing(7),
      height: theme.spacing(35),
      width: theme.spacing(35),
    },
    [theme.breakpoints.down("md")]: {
      bottom: theme.spacing(7),
      height: theme.spacing(40),
      width: theme.spacing(40),
    },
    [theme.breakpoints.down("sm")]: {
      bottom: theme.spacing(4),
      height: theme.spacing(20),
      width: theme.spacing(20),
    },

    position: "relative",
    bottom: theme.spacing(5),
  },

  titleContainer: {
    ...layouts.col,
    ...layouts.alignStart,

    textAlign: "left",
  },

  container: {
    ...layouts.col,
    ...layouts.alignStart,
    ...layouts.xCentered,
  },

  info: {
    marginBlock: theme.spacing(1),
    marginInlineEnd: theme.spacing(1),
  },
}));
