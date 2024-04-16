import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    toolbar: {
      backgroundColor: theme.palette.background.default,
      color: "black",
      justifyContent: "space-between",
    },
    iconContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };
});
