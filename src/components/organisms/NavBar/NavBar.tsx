import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useStyles } from "./NavBar.styles";
import { Toggler } from "@components/molecules";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@redux/themeReducer";
import { Logo } from "@components/atoms";
import { toggleLoading } from "@redux/LoaderReducer";
import { quickStyles } from "@constants/theme";
const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(toggleLoading());

    setTheme(newTheme);
    dispatch(toggleTheme());
    setTimeout(() => {
      dispatch(toggleLoading());
    }, 500);
  };
  const handleHomeClick = () => {
    navigate(`/`);
  };
  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoContainer}>
          <Button onClick={handleHomeClick}>
            <Logo />
          </Button>
        </Box>
        <Box className={classes.iconContainer}>
          <IconButton onClick={handleThemeChange}>
            {theme === "light" ? (
              <Brightness4Icon
                color={"action"}
                sx={quickStyles.responsiveIcons}
              />
            ) : (
              <Brightness7Icon
                color={"action"}
                sx={quickStyles.responsiveIcons}
              />
            )}
          </IconButton>
          <Toggler />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
