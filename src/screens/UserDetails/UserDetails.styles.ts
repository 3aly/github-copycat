import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  info: {
    margin: theme.spacing(1),
  },
}));
