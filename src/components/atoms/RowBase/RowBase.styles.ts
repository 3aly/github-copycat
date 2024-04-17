import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    icon: {
      flexDirection: "row",
      display: "flex",
      marginTop: theme.spacing(1),

      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      // color: "inherit",
    },
  };
});
