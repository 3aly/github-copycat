import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    direction: "ltr",
    marginInline: theme.spacing(2),
    "& .MuiToggleButtonGroup-grouped": {
      border: `1px solid ${theme.palette.primary.main}`, // Set the border color
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main, // Background color for the active tab
        color: theme.palette.text.primary, // Text color for the active tab
        "&:hover": {
          backgroundColor: theme.palette.primary.dark, // Optional: darken on hover
        },
      },
    },
  },
}));
