import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    margin: theme.spacing(10),
    width: "80%",
    ...layouts.selfCenter,
    ...layouts.col,
    ...layouts.yCentered,
    borderRadius: 10,
    background: theme.palette.background.default,

    padding: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
      ...layouts.justifyBetween,
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(10),
      padding: theme.spacing(4),
    },
  },

  contactContainer: {
    ...layouts.row,

    [theme.breakpoints.down("md")]: {
      ...layouts.col,
      ...layouts.contentCenter,
    },
  },

  moreDataContainer: {
    marginInline: theme.spacing(10),
    padding: theme.spacing(5),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.palette.text.primary,
    ...layouts.col,
    ...layouts.justifyBetween,
    ...layouts.alignStart,
    ...layouts.contentCenter,
    width: "80%",

    borderStyle: "solid",
    [theme.breakpoints.down("lg")]: {
      width: "80%",
      padding: theme.spacing(3),
      marginInline: theme.spacing(1),
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",

      ...layouts.selfCenter,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      marginInline: theme.spacing(0),
    },
  },
}));
