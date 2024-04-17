import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  allContainer: {
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginInlineEnd: theme.spacing(3),
  },

  info: {
    textAlign: "left",
  },
  link: {
    textDecoration: "none",
  },
}));
