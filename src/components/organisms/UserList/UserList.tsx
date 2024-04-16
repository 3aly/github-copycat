import React from "react";
import { Box } from "@mui/material";
import { UserCard } from "@components/molecules";
import { User } from "@datatypes/types";
import { useStyles } from "./UserList.styles";

const UserList = ({ users }: { users: User[] }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      {users.map((user) => {
        const { html_url, avatar_url, login, id } = user;
        return <UserCard key={id} {...{ html_url, avatar_url, login }} />;
      })}
    </Box>
  );
};

export default UserList;
