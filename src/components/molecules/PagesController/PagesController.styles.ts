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
      backgroundColor: "white",
      marginRight: 20,
      marginLeft: 20,
      "&:hover": { backgroundColor: theme.palette.secondary.main },

      borderRadius: 10, // Rounded corners
    },
    page: {
      borderRadius: 10, // Rounded corners
      "&:hover": { backgroundColor: "grey.100" },
      paddingInline: 30,
    },
    pagesContainer: {
      borderRadius: 10, // Rounded corners
      backgroundColor: "white",
      "&:hover": { backgroundColor: "grey.100" },
    },
  };
});
