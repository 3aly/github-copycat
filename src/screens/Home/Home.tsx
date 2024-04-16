import { PagesController } from "@components/molecules";
import { UserList } from "@components/organisms";
import { User } from "@datatypes/types";
import { fakeData } from "@fakers/index";
import { useFetchAllUsers } from "@hooks/index";
import { Container } from "@mui/material";
import { usersSlicer } from "@utils/utils";
import { useState } from "react";
import { useStyles } from "./Home.styles";

function Home() {
  const [users, setUsers] = useState<User[]>(fakeData);
  const [currentPage, setCurrentPage] = useState(1);
  const { classes } = useStyles();

  const { data, isError, isLoading } = useFetchAllUsers({
    onSuccess: (data) => {
      console.log("data loaded", data);
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
