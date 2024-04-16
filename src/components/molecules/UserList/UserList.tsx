// src/components/UserList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { fakeData } from "@fakers/index";
import { User } from "@datatypes/types";

const UserList = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <a href={user.html_url}>{user.login}</a>
        </div>
      ))}
    </div>
  );
};

export default UserList;
