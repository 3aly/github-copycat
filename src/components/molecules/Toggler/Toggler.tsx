import React, { useState } from "react";
import { useStyles } from "./Toggler.styles";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import i18next from "i18next";
import { toggleLoading } from "@redux/LoaderReducer";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Toggler = () => {
  const [language, setLanguage] = useState("en");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { classes } = useStyles();

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
      dispatch(toggleLoading());
      i18next.changeLanguage(newLanguage).then(() => {
        setTimeout(() => {
          dispatch(toggleLoading());
        }, 500);
      });
      const isRtl = newLanguage === "ar";
      document.body.dir = isRtl ? "rtl" : "ltr";
    }
  };

  return (
    <Box className={classes.container}>
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleLanguageChange}
        fullWidth
      >
        <ToggleButton value="en" className={classes.toggleButton}>
          <Typography
            fontWeight={"bold"}
            variant="body1"
            className={classes.responsiveText}
          >
            {t("en")}
          </Typography>
        </ToggleButton>
        <ToggleButton value="ar" className={classes.toggleButton}>
          <Typography
            fontWeight={"bold"}
            variant="body1"
            className={classes.responsiveText}
          >
            {t("ar")}
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default Toggler;
