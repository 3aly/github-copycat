import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "1.25rem", // Default size
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem", // Larger text on sm screens and above
      },
    },
    icon: {
      flexDirection: "row",
      display: "flex",
      marginTop: theme.spacing(1),

      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      // color: "inherit",
    },
  };
});
