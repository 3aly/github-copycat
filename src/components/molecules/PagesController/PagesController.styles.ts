import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      // alignSelf: "center",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 15,
      width: "40%",
      // paddingInline: 350,
    },
    button: {
      backgroundColor: theme.palette.background.default,
      marginRight: 20,
      marginLeft: 20,
      "&:hover": { backgroundColor: theme.palette.background.default },

      borderRadius: 5, // Rounded corners
    },
    page: {
      borderRadius: 5, // Rounded corners
      "&:hover": { backgroundColor: theme.palette.background.default },
      paddingInline: 30,
    },
    pagesContainer: {
      borderRadius: 10, // Rounded corners
      backgroundColor: theme.palette.background.default,
      "&:hover": { backgroundColor: theme.palette.background.default },
    },
  };
});
