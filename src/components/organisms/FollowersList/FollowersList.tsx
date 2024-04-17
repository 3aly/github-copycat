import { Typography, Grid, Avatar, Box } from "@mui/material";

import { User } from "@datatypes/types";
import { useStyles } from "./FollowersList.styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FollowersList = ({
  followersData,
  login,
}: {
  login?: string;
  followersData: User[];
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleFollowerClick = (login: string) => {
    navigate(`/user/${login}`);
  };
  return (
    <div className={classes.container}>
      <Box display={"flex"} flexDirection={"row"}>
        <Typography
          color={"text.primary"}
          className={classes.title}
          variant="h6"
          sx={{ mx: 0.5 }}
        >
          {t("top")}
        </Typography>
        <Typography
          color={"text.primary"}
          className={classes.title}
          variant="h6"
        >
          {login}
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {followersData?.slice(0, 5).map((user) => (
          <Grid item key={user.id}>
            <div
              onClick={() => handleFollowerClick(user.login)}
              style={{ cursor: "pointer" }}
            >
              <Avatar
                src={user.avatar_url}
                alt={user.login}
                sx={{ width: 56, height: 56 }}
              />
              <Typography color={"text.primary"} variant="body2">
                {user.login}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FollowersList;
