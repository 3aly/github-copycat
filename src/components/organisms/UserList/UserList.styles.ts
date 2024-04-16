import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: "100%",
      backgroundColor: theme.palette.background.default,
      borderRadius: 10,
    },
  };
});
