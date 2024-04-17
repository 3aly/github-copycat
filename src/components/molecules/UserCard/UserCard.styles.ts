import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "2rem", // Default size
      [theme.breakpoints.down("lg")]: {
        fontSize: "2rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem", // Larger text on sm screens and above
      },
    },
    responsiveNumbers: {
      fontSize: "1.5", // Default size
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.3rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.6rem", // Larger text on sm screens and above
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
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
    },
    content: {
      display: "flex",
      flexDirection: "row",
    },
    titleContainer: {
      flexDirection: "column",
      display: "flex",
      alignSelf: "flex-start",
      marginInlineStart: theme.spacing(2),

      alignItems: "flex-start",
    },
    iconsContainer: {
      flexDirection: "row",
      display: "flex",

      justifyContent: "space-around",

      alignSelf: "flex-end",
    },
    icons: {
      flexDirection: "row",
      display: "flex",
      marginInline: theme.spacing(0.8),
    },
    icon: {
      marginInline: theme.spacing(0.4),
    },
  };
});
