import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
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
    // marginInline: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "inherit", // optionally, inherit color from parent
  },
}));
