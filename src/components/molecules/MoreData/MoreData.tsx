import Typography from "@mui/material/Typography";
import { useStyles } from "./MoreData.styles";

import { UserData } from "@datatypes/types";

import { LineSeparator, RowBase } from "@components/atoms";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
const MoreData = ({
  bio,
  public_repos,
  public_gists,
  followers,
  following,
}: UserData) => {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Box className={classes.allContainer}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item>
            <RowBase title={t("followers")} icon="People" number={followers} />
          </Grid>
          <Grid item>
            <RowBase title={t("following")} icon="GitHub" number={following} />
          </Grid>
          <Grid item>
            <RowBase
              title={t("repositories")}
              icon="Repo"
              number={public_repos}
            />
          </Grid>
          <Grid item>
            <RowBase title={t("gist")} icon="Gist" number={public_gists} />
          </Grid>
        </Grid>
        <LineSeparator />
      </Box>
      <Typography
        color={"text.primary"}
        variant="h6"
        className={classes.responsiveText}
        sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
      >
        {bio}
      </Typography>
    </>
  );
};

export default MoreData;
