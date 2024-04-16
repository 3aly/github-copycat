import Typography from "@mui/material/Typography";
import { useStyles } from "./MoreData.styles";
import { GitHub } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import { UserData } from "@datatypes/types";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { LineSeparator } from "@components/atoms";
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
      <div>
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <PeopleIcon fontSize={"small"} sx={{ mx: 1 }} />
            <Typography fontWeight={"bold"} className={classes.info}>
              followers {followers}
            </Typography>
          </div>

          <div className={classes.iconContainer}>
            <GitHub fontSize={"small"} sx={{ mx: 1 }} />
            <Typography fontWeight={"bold"} className={classes.info}>
              following {following}
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <CardMembershipIcon fontSize={"small"} sx={{ mx: 1 }} />
            <Typography fontWeight={"bold"} className={classes.info}>
              Repositories {public_repos}
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <TurnedInNotIcon fontSize={"small"} sx={{ mx: 1 }} />
            <Typography fontWeight={"bold"} className={classes.info}>
              Gists {public_gists}
            </Typography>
          </div>
        </div>
        <LineSeparator />
      </div>
      <Typography variant="h5" className={classes.info}>
        {bio}
      </Typography>
    </>
  );
};

export default MoreData;
