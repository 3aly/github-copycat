import React, { useState } from "react";
import { useStyles } from "./Toggler.styles";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const Toggler = () => {
  const [language, setLanguage] = useState("en");
  const { classes } = useStyles();

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleLanguageChange}
      aria-label="text alignment"
      className={classes.container}
    >
      <ToggleButton value="en" aria-label="left aligned">
        EN
      </ToggleButton>
      <ToggleButton value="ar" aria-label="centered">
        عربى
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Toggler;
