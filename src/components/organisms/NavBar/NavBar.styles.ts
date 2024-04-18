import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    toolbar: {
      backgroundColor: theme.palette.background.default,
      ...layouts.justifyBetween,
    },
    iconContainer: {
      ...layouts.row,
      ...layouts.yCentered,
    },
    logoContainer: {
      ...layouts.row,
      ...layouts.yCentered,
      [theme.breakpoints.down("lg")]: {
        width: theme.spacing(15),
      },
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(14),
      },
      [theme.breakpoints.down("sm")]: {
        width: theme.spacing(12),
      },
    },
  };
});
