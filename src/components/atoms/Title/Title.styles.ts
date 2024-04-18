import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "2.3rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "2.2rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
    container: {
      ...layouts.row,
      ...layouts.selfStart,
      ...layouts.justifyBetween,
      ...layouts.yCentered,

      margin: theme.spacing(2),
    },
  };
});
