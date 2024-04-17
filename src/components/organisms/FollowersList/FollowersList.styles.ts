import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),

      [theme.breakpoints.down("xl")]: {
        height: theme.spacing(10),
        width: theme.spacing(10),
      },
      [theme.breakpoints.down("lg")]: {
        height: theme.spacing(8),
        width: theme.spacing(8),
      },
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(8),
        width: theme.spacing(8),
      },
      [theme.breakpoints.down("sm")]: {
        height: theme.spacing(5),
        width: theme.spacing(5),
      },
    },
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
    title: {
      marginBottom: theme.spacing(2),
    },
    container: {
      marginBlock: theme.spacing(2),

      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    clickable: {
      cursor: "pointer",
      display: "flex",
      background: "red",
      flexDirection: "column",
    },
    usernameContainer: { display: "flex", flexDirection: "row" },
  };
});
