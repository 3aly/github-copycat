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
    container: {
      // alignSelf: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: theme.spacing(2),
      // width: "40%",
      // paddingInline: 350,
    },
    button: {
      backgroundColor: theme.palette.background.default,
      marginInline: theme.spacing(4),
      padding: theme.spacing(1), // Smaller padding on small screens

      // marginLeft: 20,
      "&:hover": { backgroundColor: theme.palette.background.default },

      borderRadius: 5, // Rounded corners
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(0.7), // Smaller padding on small screens
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0.5), // Smaller padding on small screens
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0), // Smaller padding on small screens
      },
    },
    page: {
      borderRadius: 5, // Rounded corners
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
      borderRadius: 10, // Rounded corners
      backgroundColor: theme.palette.background.default,
      "&:hover": { backgroundColor: theme.palette.background.default },
    },
  };
});
