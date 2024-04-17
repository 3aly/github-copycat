import Typography from "@mui/material/Typography";
import { useStyles } from "./MoreData.styles";
import { GitHub } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import { UserData } from "@datatypes/types";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { LineSeparator, RowBase } from "@components/atoms";
import { Grid } from "@mui/material";
const MoreData = ({
  bio,
  public_repos,
  public_gists,
  followers,
  following,
}: UserData) => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.allContainer}>
        <div className={classes.container}>
          <Grid container spacing={7}>
            <Grid item>
              <RowBase title={"followers "} icon="People" number={followers} />
            </Grid>
            <Grid item>
              <RowBase title={"following "} icon="GitHub" number={following} />
            </Grid>
            <Grid item>
              <RowBase
                title={"Repositories "}
                icon="Repo"
                number={public_repos}
              />
            </Grid>
            <Grid item>
              <RowBase title={"Gists "} icon="Gist" number={public_gists} />
            </Grid>
          </Grid>
        </div>
        <LineSeparator />
      </div>
      <Typography color={"text.primary"} variant="h5" className={classes.info}>
        {bio}
      </Typography>
    </>
  );
};

export default MoreData;
