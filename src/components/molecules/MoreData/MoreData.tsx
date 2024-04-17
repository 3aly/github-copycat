import Typography from "@mui/material/Typography";
import { useStyles } from "./MoreData.styles";

import { UserData } from "@datatypes/types";

import { LineSeparator, RowBase } from "@components/atoms";
import { Grid } from "@mui/material";
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
      <div className={classes.allContainer}>
        <div className={classes.container}>
          <Grid container spacing={7}>
            <Grid item>
              <RowBase
                title={t("followers")}
                icon="People"
                number={followers}
              />
            </Grid>
            <Grid item>
              <RowBase
                title={t("following")}
                icon="GitHub"
                number={following}
              />
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
        </div>
        <LineSeparator />
      </div>
      <Typography
        color={"text.primary"}
        variant="h5"
        className={classes.info}
        sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
      >
        {bio}
      </Typography>
    </>
  );
};

export default MoreData;
