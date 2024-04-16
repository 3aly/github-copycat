// import { HomeHeader, TaskBoard } from "@components/organisms";
// import { useSelector } from "react-redux";
// import { AppState } from "../../types/props";

import { UserList } from "@components/molecules";
import { User } from "@datatypes/types";
import { fakeData } from "@fakers/index";
import { useFetchUsers } from "@hooks/index";
import { useFetchFollowers } from "@hooks/useFetchFollowers/useFetchFollowers";
import { useState } from "react";

function Home() {
  const [users, setUsers] = useState<User[]>(fakeData);

  useFetchUsers({
    onSuccess: (data: { users: User[] }) => {
      console.log(data);
      // setUsers(data);
    },
    enabled: true,
  });
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
    <div>
      <UserList users={users} />
    </div>
  );
}

export default Home;
