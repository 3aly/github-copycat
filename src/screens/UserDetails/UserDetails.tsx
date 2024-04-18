import { useFetchFollowers, useFetchUserDetails } from "@hooks/index";

import { useStyles } from "./UserDetails.styles";
import { useParams } from "react-router-dom";
import { LineSeparator, Loader } from "@components/atoms";
import FollowersList from "@components/organisms/FollowersList/FollowersList";
import { useState } from "react";
import { ErrorType, StoreType } from "@datatypes/types";
import { fakeFollowers, fakeUser } from "@fakers/index";

import { ContactData, MoreData } from "@components/molecules";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const UserDetails = () => {
  const [error, setError] = useState("");
  // const [userDetails, setUserDetails] = useState(fakeUser);
  // const [followersData, setFollowers] = useState(fakeFollowers);
  const { classes } = useStyles();
  const { isLoading } = useSelector((state: StoreType) => state.loader);

  const { login } = useParams<{ login: string }>();
  const {
    data: userDetails = {},
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
    data: followersData,
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
    <Box className={classes.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <LineSeparator orientation="horizontal" />
          <Box className={classes.contactContainer}>
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
            <Box className={classes.moreDataContainer}>
              <MoreData
                {...{ bio, public_repos, public_gists, followers, following }}
              />
              <LineSeparator orientation="horizontal" />

              <FollowersList {...{ followersData, login }} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default UserDetails;
