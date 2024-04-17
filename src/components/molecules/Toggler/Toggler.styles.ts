import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  responsiveText: {
    fontSize: "1.15rem", // Default size
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem", // Even larger text on md screens and above
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem", // Even larger text on md screens and above
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem", // Larger text on sm screens and above
    },
  },
  toggleButton: {
    width: "50%", // Each toggle button takes half of the container width
    paddingInline: theme.spacing(1.5),

    height: theme.spacing(5),
    [theme.breakpoints.down("lg")]: {
      height: theme.spacing(4.5),
    },
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(2),
    },
  },
  container: {
    // padding: theme.spacing(1),
    [theme.breakpoints.down("lg")]: {
      width: theme.spacing(16),
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(14),
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
    },
    direction: "ltr",
    marginBlock: theme.spacing(1),
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
