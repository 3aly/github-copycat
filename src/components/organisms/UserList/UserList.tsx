import React from "react";
import { Box, Typography } from "@mui/material";
import { UserCard } from "@components/molecules";
import { User } from "@datatypes/types";
import { useStyles } from "./UserList.styles";
import { t } from "i18next";
import { Title } from "@components/atoms";

const UserList = ({ users }: { users: User[] }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Title title={"Github Users"} />
      {users.map((user) => {
        const { html_url, avatar_url, login, id } = user;
        return <UserCard key={id} {...{ html_url, avatar_url, login }} />;
      })}
    </Box>
  );
};

export default UserList;
