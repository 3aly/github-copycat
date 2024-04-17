import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useStyles } from "./NavBar.styles";
import { Toggler } from "@components/molecules";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@redux/themeReducer";
const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    dispatch(toggleTheme());
  };
  const handleHomeClick = () => {
    navigate(`/`);
  };
  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
        <div className={classes.iconContainer}>
          <IconButton onClick={handleHomeClick}>
            <GitHubIcon color={"action"} />
          </IconButton>
        </div>
        <div className={classes.iconContainer}>
          <IconButton onClick={handleThemeChange}>
            {theme === "light" ? (
              <Brightness4Icon color={"action"} />
            ) : (
              <Brightness7Icon color={"action"} />
            )}
          </IconButton>
          <Toggler />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
