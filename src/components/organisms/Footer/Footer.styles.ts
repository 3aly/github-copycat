import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
    },
    socialMedia: {},
    copyRight: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  };
});
