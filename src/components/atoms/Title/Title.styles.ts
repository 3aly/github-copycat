import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      alignSelf: "flex-start",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 15,
      // paddingInline: 350,
    },
  };
});
