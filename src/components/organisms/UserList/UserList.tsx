import React from "react";
import { Box } from "@mui/material";
import { UserCard } from "@components/molecules";
import { User } from "@datatypes/types";
import { useStyles } from "./UserList.styles";
import { Title } from "@components/atoms";
import { useTranslation } from "react-i18next";
const UserList = ({ users }: { users: { total: number; sliced: User[] } }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.container}>
      <Title title={t("users")} count={users?.total} />
      {users.sliced.map((user) => {
        const { html_url, avatar_url, login, id } = user;
        return <UserCard key={id} {...{ html_url, avatar_url, login }} />;
      })}
    </Box>
  );
};

export default UserList;
