import React from "react";
import { getUsers } from "@/userActions";
import { IUser } from "@/types/interfaces";
import UsersCard from "./components/UsersCard";

export default async function Users() {
  const users = await getUsers();
  console.log("users: ", users);
  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map(({ email, createdAt, id, number }: IUser) => (
          <UsersCard
            key={id}
            email={email}
            createdAt={createdAt}
            number={number}
          />
        ))
      )}
    </div>
  );
}
