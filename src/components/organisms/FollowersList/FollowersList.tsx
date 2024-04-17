import { Typography, Grid, Avatar, Box } from "@mui/material";

import { User } from "@datatypes/types";
import { useStyles } from "./FollowersList.styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { quickStyles } from "@constants/theme";

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
    <Box className={classes.container}>
      <Box display={"flex"} flexDirection={"row"}>
        <Typography
          color={"text.primary"}
          className={`${classes.title} ${classes.responsiveText}`}
          variant="h6"
          sx={{ mx: 0.5 }}
        >
          {t("top")}
        </Typography>
        <Typography
          fontWeight={"bold"}
          color={"text.primary"}
          className={`${classes.title} ${classes.responsiveText}`}
          variant="h6"
        >
          {login}
        </Typography>
      </Box>
      <Grid container spacing={1} columnSpacing={quickStyles.responsiveGrid}>
        {followersData?.slice(0, 5).map((user) => (
          <Grid item key={user.id} xs={6} sm={6} md={3} lg={3}>
            <div
              onClick={() => handleFollowerClick(user.login)}
              style={{ cursor: "pointer" }}
            >
              <Avatar
                src={user.avatar_url}
                alt={user.login}
                className={classes.avatar}
              />
              <Typography color={"text.primary"} variant="body2">
                {user.login}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FollowersList;
