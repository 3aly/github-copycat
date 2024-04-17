import { useFetchFollowers, useFetchUserDetails } from "@hooks/index";

import { useStyles } from "./UserDetails.styles";
import { useParams } from "react-router-dom";
import { LineSeparator, Loader } from "@components/atoms";
import FollowersList from "@components/organisms/FollowersList/FollowersList";
import { useState } from "react";
import { ErrorType } from "@datatypes/types";
import { fakeFollowers, fakeUser } from "@fakers/index";

import { ContactData, MoreData } from "@components/molecules";
import { Typography } from "@mui/material";
const UserDetails = () => {
  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState(fakeUser);
  const [followersData, setFollowers] = useState(fakeFollowers);
  const { classes } = useStyles();

  const { login } = useParams<{ login: string }>();
  const {
    // data: userDetails,
    isLoading: isLoadingUser,
    isError: isUserError,
  } = useFetchUserDetails({
    username: login,
    onError: (data: ErrorType) => {
      setError(data.response.data.message);
    },
    onSuccess: () => {},
  });

  const {
    // data: followersData,
    isLoading: isLoadingFollowers,
    isError: isFollowersError,
  } = useFetchFollowers({
    username: login,
    onError: (data: ErrorType) => {
      setError(data.response.data.message);
    },
  });
  if (isLoadingUser || isLoadingFollowers)
    return <Loader isLoading={isLoadingUser || isLoadingFollowers} />;
  if (isUserError || isFollowersError)
    return (
      <Typography color={"error"} variant="h6">
        {error}
      </Typography>
    );
  const {
    name,
    avatar_url,
    followers,
    following,
    blog,
    location,
    company,
    bio,
    public_repos,
    public_gists,
  } = userDetails;
  return (
    <div className={classes.container}>
      <LineSeparator orientation="horizontal" />
      <div className={classes.allContainer}>
        <ContactData
          {...{
            login,
            name,
            avatar_url,

            blog,
            location,
            company,
          }}
        />
        <div className={classes.dataContainer}>
          <MoreData
            {...{ bio, public_repos, public_gists, followers, following }}
          />

          <FollowersList {...{ followersData, login }} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
