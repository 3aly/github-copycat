import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      ...layouts.col,
      width: "100%",
      paddingBlock: theme.spacing(2),
      backgroundColor: theme.palette.background.default,

      borderRadius: 10,
      [theme.breakpoints.down("lg")]: {
        paddingInline: theme.spacing(2.2),
      },
      [theme.breakpoints.down("md")]: {
        paddingInline: theme.spacing(2),
      },
      [theme.breakpoints.down("sm")]: {
        paddingInline: theme.spacing(0.8),
      },
    },
  };
});
