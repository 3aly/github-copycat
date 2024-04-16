// import { HomeHeader, TaskBoard } from "@components/organisms";
// import { useSelector } from "react-redux";
// import { AppState } from "../../types/props";

import { PagesController } from "@components/molecules";
import { UserList } from "@components/organisms";
import { User } from "@datatypes/types";
import { fakeData } from "@fakers/index";
import { useFetchUsers } from "@hooks/index";
import { useFetchFollowers } from "@hooks/useFetchFollowers/useFetchFollowers";
import { Box, Container } from "@mui/material";
import { usersSlicer } from "@utils/utils";
import { useState } from "react";
import { useStyles } from "./Home.styles";

function Home() {
  const [users, setUsers] = useState<User[]>(fakeData);
  const [currentPage, setCurrentPage] = useState(1);
  const { classes } = useStyles();

  const { data, isError, isLoading } = useFetchUsers({
    onSuccess: (data) => {
      console.log("data loaded", data);
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const {
  //   data: followers,
  //   isLoading,
  //   isError,
  // } = useFetchFollowers({
  //   username: "mojombo",
  //   onSuccess: (data: { users: [] }) => {
  //     console.log(data);
  //     // setUsers(data);
  //   },
  // });
  return (
    <Container className={classes.container}>
      <UserList users={usersSlicer(users, currentPage)} />
      <PagesController
        total={users.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

export default Home;
