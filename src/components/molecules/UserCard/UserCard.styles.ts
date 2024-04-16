import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
      padding: "10 10 20 10",
    },
    content: {
      backgroundColor: "red",

      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
    },
    titleContainer: {
      flexDirection: "column",
      display: "flex",
      alignSelf: "flex-start",
      marginInlineStart: 10,
      alignItems: "flex-start",
    },
    iconsContainer: {
      marginInlineEnd: 10,

      flexDirection: "row",
      display: "flex",
      alignSelf: "flex-end",
      // justifyContent: "space-between",
    },
    icon: {
      flexDirection: "row",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",

      // alignSelf: "flex-end",
      // justifyContent: "space-between",
    },
  };
});
