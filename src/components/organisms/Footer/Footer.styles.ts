import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "1.25rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    footer: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
      ...layouts.justifyBetween,
      ...layouts.row,
      [theme.breakpoints.down("sm")]: {
        ...layouts.col,
        ...layouts.allCentered,
      },
    },
    socialMedia: {
      ...layouts.row,
    },
    copyRight: {
      ...layouts.justifyEnd,
      ...layouts.alignedEnd,
    },
  };
});
