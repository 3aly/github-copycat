import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    responsiveText: {
      fontSize: "2.3rem", // Default size
      [theme.breakpoints.down("lg")]: {
        fontSize: "2.2rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem", // Even larger text on md screens and above
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem", // Larger text on sm screens and above
      },
    },
    container: {
      alignSelf: "flex-start",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 15,
      // paddingInline: 350,
    },
  };
});
