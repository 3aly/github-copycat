import { useFetchUserDetails } from "@hooks/index";
import { Avatar, Card, Grid, Typography } from "@mui/material";

import { useStyles } from "./UserDetails.styles";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { classes } = useStyles();

  const { login } = useParams<{ login: string }>();
  console.log("username", login);
  const { data, isLoading, error } = useFetchUserDetails({ username: login });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred:</div>;

  return (
    <Card className={classes.card}>
      <Avatar
        src={data?.avatar_url}
        className={classes.avatar}
        alt={data?.login}
      />
      <Typography variant="h5">{data?.name || data?.login}</Typography>
      <Typography className={classes.info}>{data?.bio}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.info}>
            Followers: {data?.followers}
          </Typography>
          <Typography className={classes.info}>
            Following: {data?.following}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.info}>
            Public Repos: {data?.public_repos}
          </Typography>
          <Typography className={classes.info}>
            Gists: {data?.public_gists}
          </Typography>
        </Grid>
      </Grid>
      <Typography className={classes.info}>Company: {data?.company}</Typography>
      <Typography className={classes.info}>
        Blog: <a href={data?.blog}>{data?.blog}</a>
      </Typography>
      <Typography className={classes.info}>
        Location: {data?.location}
      </Typography>
    </Card>
  );
};

export default UserDetails;
