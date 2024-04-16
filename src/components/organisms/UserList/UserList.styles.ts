import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingBottom: 20,
      backgroundColor: theme.palette.background.default,
      borderRadius: 10,
    },
  };
});
