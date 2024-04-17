import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    toolbar: {
      backgroundColor: theme.palette.background.default,
      // color: "black",

      justifyContent: "space-between",
    },
    iconContainer: {
      // [theme.breakpoints.down("lg")]: {
      //   backgroundColor: "green",
      //   width: theme.spacing(15),
      //   // height: theme.spacing(2),
      // },
      // [theme.breakpoints.down("md")]: { width: theme.spacing(12) },
      // [theme.breakpoints.down("sm")]: { width: theme.spacing(15) },
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    logoContainer: {
      [theme.breakpoints.down("lg")]: {
        width: theme.spacing(15),
      },
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(14),
      },
      [theme.breakpoints.down("sm")]: {
        width: theme.spacing(12),
      },
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };
});
