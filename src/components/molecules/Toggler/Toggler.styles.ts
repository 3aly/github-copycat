import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  responsiveText: {
    fontSize: "1.15rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
    },
  },
  toggleButton: {
    width: "50%",
    paddingInline: theme.spacing(1.5),

    height: theme.spacing(5),
    [theme.breakpoints.down("lg")]: {
      height: theme.spacing(4.5),
    },
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(4.5),
    },
  },
  container: {
    [theme.breakpoints.down("lg")]: {
      width: theme.spacing(16),
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(14),
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
    },
    direction: "ltr",
    marginBlock: theme.spacing(1),
    "& .MuiToggleButtonGroup-grouped": {
      border: `1px solid ${theme.palette.primary.main}`,
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  },
}));
