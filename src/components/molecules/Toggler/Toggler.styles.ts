import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    "& .MuiToggleButtonGroup-grouped": {
      border: `1px solid ${theme.palette.primary.main}`, // Set the border color
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main, // Background color for the active tab
        color: "white", // Text color for the active tab
        "&:hover": {
          backgroundColor: theme.palette.primary.dark, // Optional: darken on hover
        },
      },
    },
  },
}));
