import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    title: {
      marginBottom: theme.spacing(2),
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    usernameContainer: { display: "flex", flexDirection: "row" },
  };
});
