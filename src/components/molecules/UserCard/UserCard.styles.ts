import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "2rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    responsiveNumbers: {
      fontSize: "1.5",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.6rem",
      },
    },
    avatar: {
      width: theme.spacing(15),
      borderRadius: 1,
      height: theme.spacing(15),

      [theme.breakpoints.down("xl")]: {
        height: theme.spacing(12),
        width: theme.spacing(12),
      },
      [theme.breakpoints.down("lg")]: {
        height: theme.spacing(15),
        width: theme.spacing(15),
      },
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(10),
        width: theme.spacing(10),
      },
      [theme.breakpoints.down("sm")]: {
        height: theme.spacing(7),
        width: theme.spacing(7),
      },
    },
    container: {
      ...layouts.row,
      ...layouts.justifyBetween,
    },
    content: {
      ...layouts.row,
    },
    titleContainer: {
      ...layouts.col,
      ...layouts.selfStart,
      ...layouts.alignStart,

      marginInlineStart: theme.spacing(2),
    },
    iconsContainer: {
      ...layouts.row,
      ...layouts.justifyBetween,
      ...layouts.selfEnd,
    },
    icons: {
      ...layouts.row,
      ...layouts.yCentered,

      marginInline: theme.spacing(0.8),
    },
    icon: {
      marginInline: theme.spacing(0.4),
    },
  };
});
