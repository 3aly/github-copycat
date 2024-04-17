import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "space-between",
      alignContent: "space-between",
      display: "flex",
      flexDirection: "column",
    },
  };
});
