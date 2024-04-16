import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
      backdropFilter: "blur(5px)", // Apply blur effect to the background
    },
  };
});
