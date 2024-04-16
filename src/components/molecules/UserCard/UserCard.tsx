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

const UserCard = ({ login, avatar_url, html_url }: UserCardProps) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.container}>
      <CardActionArea
        onClick={() => {}}
        href={html_url}
        target="_blank"
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardContent
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            src={avatar_url}
            alt={login}
            sx={{ width: 100, height: 100, borderRadius: 1 }}
          />
          <div>
            <Typography variant="h6" component="div">
              {login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {html_url}
            </Typography>
          </div>
        </CardContent>
        <div>
          <div>
            <IconButton disabled>
              <PeopleIcon />
            </IconButton>
            <Typography variant="body2">{1}</Typography>
          </div>
          <div>
            <IconButton disabled>
              <GitHub />
            </IconButton>
            <Typography variant="body2">{123}</Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
