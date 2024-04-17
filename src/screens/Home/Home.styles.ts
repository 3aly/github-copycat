import { Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { COLORS } from "../../constants/colors";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      marginTop: theme.spacing(10),
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
    },
  };
});
