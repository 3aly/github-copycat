import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    margin: theme.spacing(10),

    alignSelf: "center",
    borderRadius: 10,
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
      // styles for screens larger than 'md'
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      // styles for screens larger than 'md'
      margin: theme.spacing(10),
      padding: theme.spacing(4),
    },
  },

  contactContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      // changes to row layout on larger screens
      flexDirection: "column",
      alignContent: "center",
      // backgroundColor: "red",
    },
  },

  moreDataContainer: {
    // width: "60%",
    [theme.breakpoints.down("xl")]: { width: "auto" },
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(3),
      marginInline: theme.spacing(2),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
      // marginInline: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "red",
      padding: theme.spacing(2),
      marginInline: theme.spacing(0),
    },
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
}));
