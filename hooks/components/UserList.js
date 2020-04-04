import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users");
  return (
    <ur>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ur>
  );
};

export default UserList;
