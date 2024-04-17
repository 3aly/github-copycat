import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    // backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 10,
    // marginTop: theme.spacing(2),
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(10),
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
    padding: theme.spacing(5),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "center",
    borderStyle: "solid",
  },
  // followingContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   // alignSelf: "flex-end",
  //   // alignContent: "flex-end",
  //   // justifyContent: "flex-end",
  //   // alignItems: "flex-start",
  // },
}));
