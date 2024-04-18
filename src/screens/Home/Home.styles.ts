import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      marginTop: theme.spacing(10),
      ...layouts.col,
      ...layouts.allCentered,
    },
  };
});
