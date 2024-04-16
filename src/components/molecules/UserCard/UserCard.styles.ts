import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
      //   width: "100%",
      //   alignItems: "space-between",
      margin: 10,
    },
  };
});
