import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { UserCardProps } from "@datatypes/props";
import { useStyles } from "./UserCard.styles";
import IconButton from "@mui/material/IconButton";
import PeopleIcon from "@mui/icons-material/People";
import { GitHub } from "@mui/icons-material";
import { generateRandomNumber } from "@utils/utils";
import { useNavigate } from "react-router-dom";

const UserCard = ({ login, avatar_url, html_url }: UserCardProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate(); // Add this line to get the navigate function

  const handleCardClick = () => {
    navigate(`/user/${login}`); // Navigate to UserDetails with username
  };
  return (
    <CardActionArea
      className={classes.container}
      onClick={handleCardClick}
      // href={html_url}
      // target="_blank"
    >
      <CardContent className={classes.container}>
        <Avatar
          src={avatar_url}
          alt={login}
          sx={{ width: 100, height: 100, borderRadius: 1 }}
        />
        <div className={classes.titleContainer}>
          <Typography variant="h6" component="div">
            {login}
          </Typography>
          <Typography variant="body2">{html_url}</Typography>
        </div>
      </CardContent>
      <div className={classes.iconsContainer}>
        <div className={classes.icon}>
          <IconButton disabled>
            <PeopleIcon />
          </IconButton>
          <Typography variant="body2">{generateRandomNumber()}</Typography>
        </div>
        <div className={classes.icon}>
          <IconButton disabled>
            <GitHub />
          </IconButton>
          <Typography variant="body2">{generateRandomNumber()}</Typography>
        </div>
      </div>
    </CardActionArea>
  );
};

export default UserCard;
