import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    // backgroundColor: "red",

    // marginTop: theme.spacing(2),
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(40),
    position: "relative",
    bottom: theme.spacing(5),
    height: theme.spacing(40),
  },

  allContainer: {
    display: "flex",
    width: theme.spacing(200),
    flexDirection: "row",
    // justifyContent: "center",
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  dataContainer: {
    width: "60%",

    marginInline: theme.spacing(10),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderStyle: "solid",
  },
  followingContainer: {
    display: "flex",
    flexDirection: "row",
    // alignSelf: "flex-end",
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    // alignItems: "flex-start",
  },
  info: {
    marginBlock: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "inherit", // optionally, inherit color from parent
  },
}));
