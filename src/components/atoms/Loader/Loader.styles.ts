import { layouts } from "@constants/quickstyles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      ...layouts.col,
      position: "fixed",
      ...layouts.allCentered,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",

      backdropFilter: "blur(5px)",
    },
  };
});
