import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "1.25rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    container: {
      ...layouts.row,
      ...layouts.justifyBetween,
      ...layouts.yCentered,
      margin: theme.spacing(2),
    },
    button: {
      backgroundColor: theme.palette.background.default,
      marginInline: theme.spacing(4),
      padding: theme.spacing(1),

      "&:hover": { backgroundColor: theme.palette.background.default },

      borderRadius: 5,
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(0.7),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0.5),
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0),
      },
    },
    page: {
      borderRadius: 5,
      "&:hover": { backgroundColor: theme.palette.background.default },
      paddingInline: theme.spacing(2.5),
      [theme.breakpoints.down("lg")]: {
        paddingInline: theme.spacing(2.2),
      },
      [theme.breakpoints.down("md")]: {
        paddingInline: theme.spacing(2),
      },
      [theme.breakpoints.down("sm")]: {
        paddingInline: theme.spacing(0.8),
      },
    },
    pagesContainer: {
      borderRadius: 10,
      backgroundColor: theme.palette.background.default,
      "&:hover": { backgroundColor: theme.palette.background.default },
    },
  };
});
