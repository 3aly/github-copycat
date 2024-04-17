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

    footer: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between", // Larger text on sm screens and above

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",

        justifyContent: "space-between", // Larger text on sm screens and above
        alignItems: "center",
      },
    },
    socialMedia: {},
    copyRight: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  };
});
