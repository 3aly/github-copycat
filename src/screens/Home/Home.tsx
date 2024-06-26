import { PagesController } from "@components/molecules";
import { UserList } from "@components/organisms";
import { ErrorType, StoreType, User } from "@datatypes/types";
import { fakeData } from "@fakers/index";
import { useFetchAllUsers } from "@hooks/index";
import { Container, Typography } from "@mui/material";
import { usersSlicer } from "@utils/utils";
import { useState } from "react";
import { useStyles } from "./Home.styles";
import { Loader } from "@components/atoms";
import { useSelector } from "react-redux";

function Home() {
  const { isLoading } = useSelector((state: StoreType) => state.loader);

  // const [users, setUsers] = useState<User[]>(fakeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const { classes } = useStyles();

  const {
    data: users = [],
    isError,
    isLoading: isUsersLoading,
  } = useFetchAllUsers({
    onError: (data: ErrorType) => {
      console.log("error:", data);
      setError(data.response.data.message);
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isUsersLoading) return <Loader isLoading={isLoading} />;
  if (isError)
    return (
      <Typography color={"error"} variant="h6">
        {error}
      </Typography>
    );

  return (
    <Container className={classes.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UserList users={usersSlicer(users, currentPage)} />
          <PagesController
            total={users?.length ?? 0}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
}

export default Home;
