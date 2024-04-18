import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "0.8rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    icon: {
      ...layouts.row,
      ...layouts.yCentered,

      marginTop: theme.spacing(1),
    },
    link: {
      textDecoration: "none",
    },
  };
});
